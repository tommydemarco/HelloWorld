import SectionHeadline from '../SectionHeadline';
import styles from './StackHero.module.scss';

interface StackHeroProps {
    sectionId: string;
    headline: string;
    subtext: string;
}

const StackHero: React.FC<StackHeroProps> = ({
    headline,
    sectionId,
    subtext,
}) => {
    return (
        <section id={sectionId} className={styles['stack-hero']}>
            <header className={styles['stack-hero__header']}>
                <SectionHeadline element="h2">{headline}</SectionHeadline>
                <p>{subtext}</p>
            </header>
        </section>
    );
};

export default StackHero;
