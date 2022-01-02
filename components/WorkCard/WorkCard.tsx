import { useState, useRef } from 'react';

import styles from './WorkCard.module.scss';

import { WorkInfo } from '../../data/workInfo.types';

const WorkCard: React.FC<WorkInfo> = ({ title, timeRange, description }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(340);

    return (
        <article
            style={{ minWidth: cardWidth + 'px' }}
            ref={cardRef}
            className={styles['work-card']}
        >
            <div className={styles['work-card__title'] + ' card-title'}>
                {title}
            </div>
            <div className={styles['work-card__time-range']}>{timeRange}</div>
            <div
                className={
                    styles['work-card__description'] + ' card-description'
                }
            >
                {description}
            </div>
            <div className={styles['work-card__timeline']}></div>
        </article>
    );
};

export default WorkCard;
