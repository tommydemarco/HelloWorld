import PinOutline from '../../assets/svgs/pin-outline.svg';
import ReactGradient from '../../assets/svgs/logo-react-gradient.svg';
import GitlabGradient from '../../assets/svgs/logo-gitlab-gradient.svg';
import PhonePortrait from '../../assets/svgs/phone-portrait.svg';
import MailOpen from '../../assets/svgs/mail-open.svg';
import Linkedin from '../../assets/svgs/logo-linkedin.svg';
import GitHub from '../../assets/svgs/logo-github.svg';
import SassGradient from '../../assets/svgs/logo-sass-gradient.svg';
import StencilGradient from '../../assets/svgs/logo-stencil-gradient.svg';

import ContactLink from '../ContactLink';

import styles from './ContactCard.module.scss';

import { ContactInfo } from '../../data/contactInfo.types';

const ContactCard: React.FC<ContactInfo> = ({
    name,
    profession,
    location,
    phone,
    email,
    github,
    linkedin,
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
                    <PinOutline /> {location}
                </div>
                <div className={styles['contact-card__react-icon']}>
                    <ReactGradient />
                </div>
                <div className={styles['contact-card__gitlab-icon']}>
                    <GitlabGradient />
                </div>
            </div>
            <div
                className={
                    styles['contact-card__face'] +
                    ' ' +
                    styles['contact-card__face--back']
                }
            >
                <div className={styles['contact-card__sass-icon']}>
                    <SassGradient />
                </div>
                <div className={styles['contact-card__stencil-icon']}>
                    <StencilGradient />
                </div>
                <div className={styles['contact-card__contacts-container']}>
                    {/* <ContactLink text={phone} link={'tel:' + phone.trim()}>
                        <PhonePortrait />
                    </ContactLink> */}
                    <ContactLink text={email} link={'mailto:' + email}>
                        <MailOpen />
                    </ContactLink>
                    <ContactLink text={github.text} link={github.link}>
                        <GitHub />
                    </ContactLink>
                    <ContactLink text={linkedin.text} link={linkedin.link}>
                        <Linkedin />
                    </ContactLink>
                </div>
            </div>
        </>
    );
};

export default ContactCard;
