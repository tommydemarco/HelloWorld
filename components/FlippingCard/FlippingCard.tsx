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
    if (appState.contactHighlight)
        classes.push(styles['flipping-card--highlight']);

    useEffect(() => {
        if (appState.contactHighlight === false) {
            document.body.scrollTop = 100;
        }
    }, [appState.contactHighlight]);

    return (
        <>
            <ContactOverlay />
            <div className={classes.join(' ')}>
                {appState.contactHighlight && (
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
                    name="close"
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
