import styles from './SectionHeadline.module.scss';

interface SectionHeadlineProps {
    element: 'div' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    main?: true;
    children: React.ReactNode;
    tertiary?: boolean;
}

const SectionHeadline: React.FC<SectionHeadlineProps> = ({
    element,
    main,
    children,
    tertiary,
}) => {
    const Element = element;
    const classes = [styles['section-headline']];
    if (main) classes.push(styles['section-headline--main']);
    if (tertiary) classes.push(styles['section-headline--tertiary']);

    return <Element className={classes.join(' ')}>{children}</Element>;
};

export default SectionHeadline;
