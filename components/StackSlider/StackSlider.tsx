import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

interface StackSliderProps {
    stackInfo: StackInfo[];
}

interface StackInfo {
    title: string;
    description: string;
    imageSrc: string;
    inageAlt: string;
}

const StackSlider: React.FC<StackSliderProps> = ({ stackInfo }) => {
    return (
        <Swiper slidesPerView={3} spaceBetween={30}>
            {stackInfo.map((stackInfo: StackInfo) => {
                return <SwiperSlide key={stackInfo.title}></SwiperSlide>;
            })}
        </Swiper>
    );
};

export default StackSlider;
