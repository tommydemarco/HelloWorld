import { useState, useRef } from 'react';

import Ribbon from '../../assets/svgs/ribbon.svg';
import DocumentText from '../../assets/svgs/document-text.svg';

import styles from './EducationCard.module.scss';

import { EducationInfo } from '../../data/educationInfo.types';

const EducationCard: React.FC<EducationInfo> = ({
    title,
    type,
    time,
    assetLink,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(340);

    return (
        <article
            style={{ minWidth: cardWidth + 'px' }}
            ref={cardRef}
            className={styles['education-card']}
        >
            <div className={styles['education-card__title'] + ' card-title'}>
                {title}
            </div>
            <div className={styles['education-card__icon-background']}>
                {type === 'certification' ? <Ribbon /> : <DocumentText />}
            </div>
        </article>
    );
};

export default EducationCard;
