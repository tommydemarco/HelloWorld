import SectionHeadline from '../SectionHeadline';

import styles from './Footer.module.scss';

interface FooterProps {
    textTitle: string;
    textBody: string;
    children: React.ReactNode;
    endText: string;
}

const Footer: React.FC<FooterProps> = ({
    textTitle,
    textBody,
    children,
    endText,
}) => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__container']}>
                <div className={styles['footer__text']}>
                    <SectionHeadline element="div" tertiary>
                        {textTitle}
                    </SectionHeadline>
                    <p>{textBody}</p>
                </div>
                <div className={styles['footer__links-container']}>
                    {children}
                </div>
            </div>
            <div className={styles['footer__end-text']}>{endText}</div>
        </footer>
    );
};

export default Footer;
