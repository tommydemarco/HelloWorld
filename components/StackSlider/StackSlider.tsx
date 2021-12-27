import StackCard from '../StackCard';

import styles from './StackSlider.module.scss';

export interface StackSliderProps {
    stackInfo: StackInfo[];
}

export interface StackInfo {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

const StackSlider: React.FC<StackSliderProps> = ({ stackInfo }) => {
    return (
        <div className={styles['stack-slider']}>
            {stackInfo.map((stackInfo: StackInfo) => {
                return (
                    <StackCard
                        key={stackInfo.title}
                        title={stackInfo.title}
                        description={stackInfo.description}
                        imageAlt={stackInfo.imageAlt}
                        imageSrc={stackInfo.imageSrc}
                    />
                );
            })}
        </div>
    );
};

export default StackSlider;
