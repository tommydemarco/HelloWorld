import { useEffect, useContext } from 'react';

import Close from '../../assets/svgs/close-circle-outline.svg';
import ContactOverlay from '../ContactOverlay';

// context
import { AppContext, APP_ACTION_TYPES } from '../../context';

import styles from './FlippingCard.module.scss';

interface FlippingCardProps {
    translateOf: number;
    children: React.ReactNode;
}

const FlippingCard: React.FC<FlippingCardProps> = ({
    children,
    translateOf,
}) => {
    const { appState, appDispatch } = useContext(AppContext)!;

    const rotationDegree = translateOf * 1.8;

    const classes = [styles['flipping-card']];
    if (appState.blockScreen) classes.push(styles['flipping-card--highlight']);

    useEffect(() => {
        if (appState.blockScreen === false) {
            document.body.scrollTop = 100;
        }
    }, [appState.blockScreen]);

    return (
        <>
            <ContactOverlay />
            <div className={classes.join(' ')}>
                {appState.blockScreen && (
                    <style>
                        {`
                            body {
                                overflow-y: hidden;
                            }
                        `}
                    </style>
                )}
                <button
                    className={styles['flipping-card__close-highlight']}
                    onClick={() =>
                        appDispatch({
                            type: APP_ACTION_TYPES.SET_CONTACT_HIGHLIGHT,
                            payload: false,
                        })
                    }
                    aria-label="close"
                >
                    <Close />
                </button>
                <div
                    style={{
                        transform: ' rotateX(-' + rotationDegree + 'deg)',
                    }}
                    className={styles['flipping-card__content']}
                >
                    {children}
                </div>
            </div>
        </>
    );
};

export default FlippingCard;
