import { useRef, useState, useEffect } from 'react';

import styles from './ScrollSlider.module.scss';

export interface ScrollSliderProps {
    children: React.ReactNode;
    translateOf: number;
}

const ScrollSlider: React.FC<ScrollSliderProps> = ({
    children,
    translateOf,
}) => {
    const [translateValue, setTranslateValue] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sliderRef.current) return;
        const elWidth = sliderRef.current.clientWidth;
        const visible = window.innerWidth * 0.8;
        const widthToScroll = elWidth - visible;
        const translateInPx = (widthToScroll / 100) * translateOf;
        setTranslateValue(translateInPx);
    }, [translateOf]);

    return (
        <div
            ref={sliderRef}
            style={{ transform: 'translateX(-' + translateValue + 'px)' }}
            className={styles['scroll-slider']}
        >
            {children}
        </div>
    );
};

export default ScrollSlider;
