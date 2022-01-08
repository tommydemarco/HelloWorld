import ScrollableContent from '../ScrollableContent';

import styles from './StackCard.module.scss';

import { StackInfo } from '../../data/stackInfo.types';

const StackCard: React.FC<StackInfo> = ({ title, description, icon }) => {
    return (
        <article className={styles['stack-card']}>
            <ScrollableContent>
                <div className={styles['stack-card__container']}>
                    <header className={styles['stack-card__header']}>
                        <div
                            className={
                                styles['stack-card__card-title'] + ' card-title'
                            }
                        >
                            <i className={styles['stack-card__title-icon']}>
                                {icon}
                            </i>
                            <span>{title}</span>
                        </div>
                    </header>
                    <div
                        className={
                            styles['stack-card__description'] +
                            ' card-description'
                        }
                    >
                        {description}
                    </div>
                </div>
            </ScrollableContent>
            <div className={styles['stack-card__icon-background']}>{icon}</div>
        </article>
    );
};

export default StackCard;
