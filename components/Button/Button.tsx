import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    href,
    children,
    onClick,
    secondary,
}) => {
    const Element = href === undefined ? 'button' : 'a';
    const classes = [styles['button']];

    if (secondary) classes.push(styles['button--secondary']);

    return (
        <Element href={href} onClick={onClick} className={classes.join(' ')}>
            {children}
        </Element>
    );
};

export default Button;
