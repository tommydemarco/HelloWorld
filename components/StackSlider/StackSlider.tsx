import { Swiper, SwiperSlide } from 'swiper/react';
import StackCard from '../StackCard';

import 'swiper/css/bundle';

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
        <Swiper slidesPerView={3} spaceBetween={30}>
            {stackInfo.map((stackInfo: StackInfo) => {
                return (
                    <SwiperSlide key={stackInfo.title}>
                        <StackCard
                            title={stackInfo.title}
                            description={stackInfo.description}
                            imageAlt={stackInfo.imageAlt}
                            imageSrc={stackInfo.imageSrc}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default StackSlider;
