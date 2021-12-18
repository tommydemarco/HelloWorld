import SectionHeadline from '../SectionHeadline';
import styles from './StackHero.module.scss';

interface StackHeroProps {
    headline: string;
}

const StackHero: React.FC<StackHeroProps> = ({ headline }) => {
    return (
        <section className={styles['stack-hero']}>
            <SectionHeadline element="h2">{headline}</SectionHeadline>
        </section>
    );
};

export default StackHero;
