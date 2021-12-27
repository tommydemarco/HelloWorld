import SectionHeadline from '../SectionHeadline';
import StackSlider from '../StackSlider';

import styles from './StackHero.module.scss';

import { StackInfo } from '../StackSlider/StackSlider';

interface StackHeroProps {
    sectionId: string;
    headline: string;
    subtext: string;
    stackInfo: StackInfo[];
}

const StackHero: React.FC<StackHeroProps> = ({
    headline,
    sectionId,
    subtext,
    stackInfo,
}) => {
    return (
        <section id={sectionId} className={styles['stack-hero']}>
            <header className={styles['stack-hero__header']}>
                <SectionHeadline element="h2">{headline}</SectionHeadline>
                <p>{subtext}</p>
            </header>
            <StackSlider stackInfo={stackInfo} />
        </section>
    );
};

export default StackHero;
