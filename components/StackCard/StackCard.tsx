import Image from 'next/image';

import styles from './StackCard.module.scss';

import { StackInfo } from '../StackSlider/StackSlider';

const StackCard: React.FC<StackInfo> = ({
    title,
    description,
    imageSrc,
    imageAlt,
}) => {
    return (
        <article className={styles['stack-card']}>
            <div className={styles['stack-card__img-container']}>
                <Image src={imageSrc} alt={imageAlt} height="300" width="300" />
            </div>
            <div className={styles['stack-card__container']}>
                <header className={styles['stack-card__header']}>
                    <div className={styles['stack-card__card-title']}>
                        {title}
                    </div>
                </header>
                <div className={styles['stack-card__description']}>
                    {description}
                </div>
            </div>
        </article>
    );
};

export default StackCard;
