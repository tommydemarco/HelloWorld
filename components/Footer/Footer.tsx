import SectionHeadline from '../SectionHeadline';

import styles from './Footer.module.scss';

interface FooterProps {
    textTile: string;
    textBody: string;
}

const Footer: React.FC<FooterProps> = ({ textTile, textBody }) => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__text']}>
                <SectionHeadline element="h6">{textTile}</SectionHeadline>
                <p>{textBody}</p>
            </div>
        </footer>
    );
};

export default Footer;
