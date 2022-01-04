import styles from './ContactCard.module.scss';

import { ContactInfo } from '../../data/contactInfo.types';

const ContactCard: React.FC<ContactInfo> = ({
    name,
    profession,
    location,
    phone,
    email,
    github,
}) => {
    return (
        <>
            <div
                className={
                    styles['contact-card__face'] +
                    ' ' +
                    styles['contact-card__face--front']
                }
            >
                <div className={styles['contact-card__name']}>{name}</div>
                <div className={styles['contact-card__profession']}>
                    {profession}
                </div>
                <div className={styles['contact-card__location']}>
                    {location}
                </div>
            </div>
            <div
                className={
                    styles['contact-card__face'] +
                    ' ' +
                    styles['contact-card__face--back']
                }
            >
                <div className={styles['contact-card__phone']}>{phone}</div>
                <div className={styles['contact-card__email']}>{email}</div>
            </div>
        </>
    );
};

export default ContactCard;
