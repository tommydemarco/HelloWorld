import { useContext } from 'react';

// components
import Ribbon from '../../assets/svgs/ribbon.svg';
import DocumentText from '../../assets/svgs/document-text.svg';
import ScrollableContent from '../ScrollableContent';
import Button from '../Button';

// context
import { AppContext, APP_ACTION_TYPES } from '../../context';

import styles from './EducationCard.module.scss';

// types
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
    const { appDispatch } = useContext(AppContext)!;

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
                    {buttonText && (
                        <div
                            className={
                                styles['education-card__button-container']
                            }
                        >
                            <Button
                                secondary
                                onClick={() => {
                                    appDispatch({
                                        type: APP_ACTION_TYPES.SET_IMAGE_OPEN,
                                        payload: {
                                            imgSrc: assetLink,
                                            imgAlt: title,
                                        },
                                    });
                                    appDispatch({
                                        type: APP_ACTION_TYPES.SET_BLOCK_SCREEN,
                                        payload: true,
                                    });
                                }}
                            >
                                {buttonText}
                            </Button>
                        </div>
                    )}
                </div>
            </ScrollableContent>
            <div className={styles['education-card__icon-background']}>
                {type === 'certification' ? <Ribbon /> : <DocumentText />}
            </div>
        </article>
    );
};

export default EducationCard;
