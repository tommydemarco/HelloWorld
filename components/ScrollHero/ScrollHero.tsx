import { useState, useEffect, useRef, useContext } from 'react';

import SectionHeadline from '../SectionHeadline';
import StackSlider from '../ScrollSlider';
import FlippingCard from '../FlippingCard';

import styles from './ScrollHero.module.scss';

interface StackHeroProps {
    sectionId: string;
    headline: string;
    subtext: string;
    children: React.ReactNode;
    primary?: boolean;
    card?: boolean;
    height: string;
}

const StackHero: React.FC<StackHeroProps> = ({
    headline,
    sectionId,
    subtext,
    children,
    primary,
    height,
    card,
}) => {
    const stackHeroRef = useRef<HTMLDivElement>(null);
    const headerReference = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
    const [headerHeight, setHeaderHeight] = useState<number>(160);

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

    useEffect(() => {
        const setScrollContainerHeight = () => {
            if (headerReference.current === null) return;
            setHeaderHeight(headerReference.current.clientHeight + 3);
        };
        // fixes Safari bug
        setTimeout(() => {
            setScrollContainerHeight();
        }, 1000);
        window.addEventListener('resize', setScrollContainerHeight);
        return () => {
            window.removeEventListener('resize', setScrollContainerHeight);
        };
    }, [headerReference]);

    const classes = [styles['scroll-hero']];
    if (primary) classes.push(styles['scroll-hero--primary']);

    return (
        <section
            ref={stackHeroRef}
            id={sectionId}
            className={classes.join(' ')}
            style={{ height: height }}
        >
            <div className={styles['scroll-hero__content']}>
                <header
                    className={styles['scroll-hero__header']}
                    ref={headerReference}
                >
                    <SectionHeadline element="h2">{headline}</SectionHeadline>
                    <p className={styles['scroll-hero__subtext']}>{subtext}</p>
                </header>
                <div
                    className={styles['scroll-hero__slider-container']}
                    style={{
                        height: 'calc(100vh - ' + headerHeight + 'px)',
                    }}
                >
                    {card ? (
                        <FlippingCard translateOf={scrollPercentage}>
                            {children}
                        </FlippingCard>
                    ) : (
                        <StackSlider translateOf={scrollPercentage}>
                            {children}
                        </StackSlider>
                    )}
                </div>
            </div>
            <div
                id="section-middle"
                className={styles['scroll-hero__section-middle']}
            ></div>
        </section>
    );
};

export default StackHero;
