import ScrollableContent from '../ScrollableContent';

import styles from './WorkCard.module.scss';

import { WorkInfo } from '../../data/workInfo.types';

const WorkCard: React.FC<WorkInfo> = ({ title, timeRange, description }) => {
    return (
        <article className={styles['work-card']}>
            <div className={styles['work-card__container']}>
                <ScrollableContent dark noGutterTop>
                    <div className={styles['work-card__title'] + ' card-title'}>
                        {title}
                    </div>
                    <div className={styles['work-card__time-range']}>
                        {timeRange}
                    </div>
                    <div
                        className={
                            styles['work-card__description'] +
                            ' card-description'
                        }
                    >
                        {description}
                    </div>
                </ScrollableContent>
            </div>
            <div className={styles['work-card__timeline']}></div>
        </article>
    );
};

export default WorkCard;
