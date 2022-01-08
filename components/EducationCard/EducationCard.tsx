import Ribbon from '../../assets/svgs/ribbon.svg';
import DocumentText from '../../assets/svgs/document-text.svg';
import ScrollableContent from '../ScrollableContent';
import Button from '../Button';

import styles from './EducationCard.module.scss';

import { EducationInfo } from '../../data/educationInfo.types';

const EducationCard: React.FC<EducationInfo> = ({
    title,
    type,
    time,
    organization,
    buttonText,
    assetLink,
    description,
}) => {
    const viewCertificate = () => {};

    return (
        <article className={styles['education-card']}>
            <ScrollableContent>
                <div className={styles['education-card__content']}>
                    <div
                        className={
                            styles['education-card__title'] + ' card-title'
                        }
                    >
                        {title}
                    </div>
                    <div className={styles['education-card__organization']}>
                        {organization}
                    </div>
                    <div className={styles['education-card__time']}>{time}</div>
                    <div
                        className={
                            styles['education-card__description'] +
                            ' card-description'
                        }
                    >
                        {description}
                    </div>
                    <div className={styles['education-card__button-container']}>
                        <Button secondary onClick={viewCertificate}>
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </ScrollableContent>
            <div className={styles['education-card__icon-background']}>
                {type === 'certification' ? <Ribbon /> : <DocumentText />}
            </div>
        </article>
    );
};

export default EducationCard;
