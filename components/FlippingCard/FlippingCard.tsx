import { useState, useEffect } from 'react';

import styles from './FlippingCard.module.scss';

interface FlippingCardProps {
    translateOf: number;
    children: React.ReactNode;
}

const FlippingCard: React.FC<FlippingCardProps> = ({
    children,
    translateOf,
}) => {
    const rotationDegree = translateOf * 1.8;

    return (
        <div className={styles['flipping-card']}>
            <div
                style={{
                    transform: ' rotateX(-' + rotationDegree + 'deg)',
                }}
                className={styles['flipping-card__content']}
            >
                {children}
            </div>
        </div>
    );
};

export default FlippingCard;
