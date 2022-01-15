import { useRef, useState, useEffect, useContext } from 'react';
import React from '../../assets/svgs/logo-react.svg';

import Close from '../../assets/svgs/close-outline.svg';

// context
import { AppContext, APP_ACTION_TYPES } from '../../context';

import styles from './ImageViewer.module.scss';

interface ImageViewerProps {
    imgSrc: string;
    imgAlt: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imgSrc, imgAlt }) => {
    const { appDispatch } = useContext(AppContext)!;

    const [active, setActive] = useState<boolean>(false);
    const [zoomed, setZoomed] = useState<boolean>(false);

    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setActive(true);
        if (!element.current) return;
        const triggerZoom = () => {
            setZoomed((prevState) => !prevState);
        };
        const image = element.current.querySelector('img');
        image?.addEventListener('click', triggerZoom);
        return () => {
            image?.removeEventListener('click', triggerZoom);
        };
    }, []);

    const classes = [styles['image-viewer']];
    if (active) classes.push(styles['image-viewer--active']);
    if (zoomed) classes.push(styles['image-viewer--zoomed']);

    return (
        <div className={classes.join(' ')} ref={element}>
            <button
                type="button"
                title="close"
                onClick={() => {
                    appDispatch({
                        type: APP_ACTION_TYPES.SET_IMAGE_OPEN,
                        payload: false,
                    });
                    appDispatch({
                        type: APP_ACTION_TYPES.SET_BLOCK_SCREEN,
                        payload: false,
                    });
                }}
                className={styles['image-viewer__close-button']}
            >
                <Close />
            </button>
            <div className={styles['image-viewer__container']}>
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className={styles['image-viewer__image']}
                />
            </div>
            <div className={styles['image-viewer__loading']}>
                <React />
            </div>
        </div>
    );
};

export default ImageViewer;
