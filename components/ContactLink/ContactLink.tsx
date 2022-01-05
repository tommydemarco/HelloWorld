import styles from './ContactLink.module.scss';

interface ContactLinkProps {
    text: string;
    link: string;
    children: React.ReactNode;
}

const ContactInfo: React.FC<ContactLinkProps> = ({ text, link, children }) => {
    return (
        <div className={styles['contact-info']}>
            {children}{' '}
            <a href={link} target="_blank" rel="noreferrer">
                {text}
            </a>
        </div>
    );
};

export default ContactInfo;
