import { useRef, useState, useEffect } from 'react';
import StackCard from '../StackCard';

import styles from './StackSlider.module.scss';

export interface StackSliderProps {
    stackInfo: StackInfo[];
    translateOf: number;
}

export interface StackInfo {
    title: string;
    description: string;
    icon: React.ReactElement;
}

const StackSlider: React.FC<StackSliderProps> = ({
    stackInfo,
    translateOf,
}) => {
    const [translateValue, setTranslateValue] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sliderRef.current) return;
        const elWidth = sliderRef.current.clientWidth;
        const visible = window.innerWidth * 0.8;
        const widthToScroll = elWidth - visible;
        console.log(elWidth, visible);
        const translateInPx = (widthToScroll / 100) * translateOf;
        setTranslateValue(translateInPx);
    }, [translateOf]);

    return (
        <div
            ref={sliderRef}
            style={{ transform: 'translateX(-' + translateValue + 'px)' }}
            className={styles['stack-slider']}
        >
            {stackInfo.map((stackInfo: StackInfo) => {
                return (
                    <StackCard
                        key={stackInfo.title}
                        title={stackInfo.title}
                        description={stackInfo.description}
                        icon={stackInfo.icon}
                    />
                );
            })}
        </div>
    );
};

export default StackSlider;
