import styles from './SectionHeadline.module.scss';

interface SectionHeadlineProps {
    element: 'div' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    main?: true;
    children: React.ReactNode;
}

const SectionHeadline: React.FC<SectionHeadlineProps> = ({
    element,
    main,
    children,
}) => {
    const Element = element;
    const classes = [styles['section-headline']];
    if (main) classes.push(styles['section-headline--main']);

    return <Element className={classes.join(' ')}>{children}</Element>;
};

export default SectionHeadline;
