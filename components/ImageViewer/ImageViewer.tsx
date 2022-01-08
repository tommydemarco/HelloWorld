import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

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

    useEffect(() => {
        setActive(true);
    }, []);

    const classes = [styles['image-viewer']];
    if (active) classes.push(styles['image-viewer--active']);

    return (
        <div className={classes.join(' ')}>
            <button
                type="button"
                title="close"
                onClick={() =>
                    appDispatch({
                        type: APP_ACTION_TYPES.SET_IMAGE_OPEN,
                        payload: false,
                    })
                }
                className={styles['image-viewer__close-button']}
            >
                <Close />
            </button>
            <div className={styles['image-viewer__container']}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width="1000"
                    height="500"
                    layout="fixed"
                />
            </div>
        </div>
    );
};

export default ImageViewer;
