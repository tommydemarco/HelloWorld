import { useState, useEffect, useRef } from 'react';

import styles from './ScrollableContent.module.scss';

interface ScrollableContentProps {
    children: React.ReactNode;
    dark?: boolean;
    noGutterTop?: boolean;
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({
    children,
    dark,
    noGutterTop,
}) => {
    const element = useRef<HTMLDivElement>(null);

    const [topShadow, setTopShadow] = useState<boolean>(false);
    const [bottomShadow, setBottomShadow] = useState<boolean>(false);

    useEffect(() => {
        const calculateOnResize = () => {
            if (element.current === null) return;
            if (
                element.current.scrollTop + element.current.clientHeight >=
                element.current?.scrollHeight
            )
                setBottomShadow(false);
            else setBottomShadow(true);
            if (element.current.scrollTop > 10) setTopShadow(true);
            else setTopShadow(false);
        };
        window.addEventListener('resize', calculateOnResize);
        return () => {
            window.removeEventListener('resize', calculateOnResize);
        };
    }, []);

    const handleScroll = () => {
        if (element.current === null) return;
        if (
            element.current.scrollTop + element.current.clientHeight >=
            element.current?.scrollHeight
        )
            setBottomShadow(false);
        else setBottomShadow(true);
        if (element.current.scrollTop > 10) setTopShadow(true);
        else setTopShadow(false);
    };

    const elementClasses = [styles['scrollable-content']];
    if (noGutterTop)
        elementClasses.push(styles['scrollable-content--no-gutter-top']);

    return (
        <div
            ref={element}
            className={elementClasses.join(' ')}
            onScroll={handleScroll}
        >
            <div
                style={{ opacity: topShadow ? '1' : '0' }}
                className={
                    styles['scrollable-content__top-shadow'] +
                    (dark
                        ? ' ' + styles['scrollable-content__top-shadow--dark']
                        : '')
                }
            ></div>
            {children}
            <div
                style={{ opacity: bottomShadow ? '1' : '0' }}
                className={
                    styles['scrollable-content__bottom-shadow'] +
                    (dark
                        ? ' ' +
                          styles['scrollable-content__bottom-shadow--dark']
                        : '')
                }
            ></div>
        </div>
    );
};

export default ScrollableContent;
