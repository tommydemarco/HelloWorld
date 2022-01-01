import { useState, useEffect, useRef } from 'react';

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
    const stackHeroRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = stackHeroRef.current as HTMLElement;
            const elRects = el.getBoundingClientRect();
            setScrollPercentage(() => {
                if (elRects.top >= 0) return 0;
                if (elRects.bottom - window.innerHeight <= 0) return 100;
                const percentage =
                    (Math.abs(elRects.top) /
                        (elRects.height - window.innerHeight)) *
                    100;
                return percentage;
            });
        };
        window.addEventListener('scroll', handleScroll, false);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [stackHeroRef]);

    return (
        <section
            ref={stackHeroRef}
            id={sectionId}
            className={styles['stack-hero']}
        >
            <div className={styles['stack-hero__content']}>
                <header className={styles['stack-hero__header']}>
                    <SectionHeadline element="h2">{headline}</SectionHeadline>
                    <p>{subtext}</p>
                </header>
                <div className={styles['stack-hero__slider-container']}>
                    <StackSlider
                        translateOf={scrollPercentage * 0.8}
                        stackInfo={stackInfo}
                    />
                </div>
            </div>
        </section>
    );
};

export default StackHero;
