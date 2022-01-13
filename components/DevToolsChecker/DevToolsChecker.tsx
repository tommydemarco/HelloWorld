import { useState, useContext, useEffect } from 'react';

import { AppContext, APP_ACTION_TYPES } from '../../context';

import Alert from '../../assets/svgs/alert-circle.svg';

import styles from './DevToolsChecker.module.scss';

interface DevToolsChecker {
    title: string;
    text: string;
}

const DevToolsChecker: React.FC<DevToolsChecker> = ({ title, text }) => {
    const { appState, appDispatch } = useContext(AppContext)!;

    const [isConsoleOpen, setIsConsoleOpen] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [originalHeight, setOriginalHeight] = useState<number>(0);
    const [secondaryHeight, setSecondaryHeight] = useState<number | null>(null);

    useEffect(() => {
        setOriginalHeight(window.innerHeight);
        const recordHeightOnResize = () => {
            const height = window.innerHeight;
            setSecondaryHeight(height);
        };
        window.addEventListener('resize', recordHeightOnResize);
        return () => {
            window.removeEventListener('resize', recordHeightOnResize);
        };
    }, []);

    useEffect(() => {
        if (secondaryHeight === null) return;
        if (secondaryHeight < 400 && secondaryHeight < originalHeight) {
            setIsConsoleOpen(true);
        } else {
            setIsConsoleOpen(false);
        }
    }, [secondaryHeight, originalHeight, isConsoleOpen]);

    useEffect(() => {
        console.log('CALLLED');
        appDispatch({
            type: APP_ACTION_TYPES.SET_BLOCK_SCREEN,
            payload: isConsoleOpen,
        });
        setIsOpen(isConsoleOpen);
    }, [appDispatch, isConsoleOpen]);

    const classes = [styles['dev-tools-checker']];
    if (isOpen) classes.push(styles['dev-tools-checker--open']);

    if (!isConsoleOpen) return null;

    return (
        <div className={classes.join(' ')}>
            <div className={styles['dev-tools-checker__container']}>
                <div className={styles['dev-tools-checker__title']}>
                    <Alert />
                    <span className={styles['dev-tools-checker__title-text']}>
                        {title}
                    </span>
                </div>
                <p className={styles['dev-tools-checker__body-text']}>{text}</p>
            </div>
        </div>
    );
};

export default DevToolsChecker;
