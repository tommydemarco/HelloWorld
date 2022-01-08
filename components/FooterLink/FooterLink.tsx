import Arrow from '../../assets/svgs/chevron-forward-circle.svg';

import styles from './FooterLink.module.scss';

interface FooterLinkProps {
    element: 'link' | 'button';
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({
    element,
    children,
    href,
    onClick,
}) => {
    if (element === 'link')
        return (
            <a
                className={styles['footer-link']}
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                <i className={styles['footer-link__icon']}>
                    <Arrow />
                </i>
                <span className={styles['footer-link__text']}>{children}</span>
            </a>
        );
    else
        return (
            <button className={styles['footer-link']} onClick={onClick}>
                <i className={styles['footer-link__icon']}>
                    <Arrow />
                </i>
                <span className={styles['footer-link__text']}>{children}</span>
            </button>
        );
};

export default FooterLink;
