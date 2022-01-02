import { useState, useEffect, useRef } from 'react';

import SectionHeadline from '../SectionHeadline';
import StackSlider from '../ScrollSlider';

import styles from './ScrollHero.module.scss';

interface StackHeroProps {
    sectionId: string;
    headline: string;
    subtext: string;
    children: React.ReactNode;
}

const StackHero: React.FC<StackHeroProps> = ({
    headline,
    sectionId,
    subtext,
    children,
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
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [stackHeroRef]);

    return (
        <section
            ref={stackHeroRef}
            id={sectionId}
            className={styles['scroll-hero']}
        >
            <div className={styles['scroll-hero__content']}>
                <header className={styles['scroll-hero__header']}>
                    <SectionHeadline element="h2">{headline}</SectionHeadline>
                    <p>{subtext}</p>
                </header>
                <div className={styles['scroll-hero__slider-container']}>
                    <StackSlider translateOf={scrollPercentage}>
                        {children}
                    </StackSlider>
                </div>
            </div>
        </section>
    );
};

export default StackHero;
