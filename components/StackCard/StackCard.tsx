import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import styles from './StackCard.module.scss';

import { StackInfo } from '../../data/stackInfo.types';

const StackCard: React.FC<StackInfo> = ({ title, description, icon }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(300);

    useEffect(() => {
        // if (cardRef.current === null) return;
        // const cardScrollHeight = cardRef.current.scrollHeight;
        // const cardHeight = cardRef.current.clientHeight;
        // if (cardScrollHeight <= cardHeight) return;
        // setCardWidth((previousWidth) => previousWidth + 5);
    }, [cardWidth]);

    return (
        <article
            style={{ minWidth: cardWidth + 'px' }}
            ref={cardRef}
            className={styles['stack-card']}
        >
            {/* <div className={styles['stack-card__img-container']}>
                <Image src={imageSrc} alt={imageAlt} height="300" width="300" />
            </div> */}
            <div className={styles['stack-card__container']}>
                <header className={styles['stack-card__header']}>
                    <div className={styles['stack-card__card-title']}>
                        <i className={styles['stack-card__title-icon']}>
                            {icon}
                        </i>
                        <span>{title}</span>
                    </div>
                </header>
                <div className={styles['stack-card__description']}>
                    {description}
                </div>
            </div>
            <div className={styles['stack-card__icon-background']}>{icon}</div>
        </article>
    );
};

export default StackCard;
