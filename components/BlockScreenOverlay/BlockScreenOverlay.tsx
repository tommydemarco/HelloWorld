import { useContext, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styles from './BlockScreenOverlay.module.scss';

// context
import { AppContext } from '../../context';

const BlockScreenOverlay = () => {
    const element = useRef<HTMLDivElement>(null);
    const { appState } = useContext(AppContext)!;

    const classes = [styles['block-screen-overlay']];
    if (appState.blockScreen)
        classes.push(styles['block-screen-overlay--active']);

    useEffect(() => {
        if (element.current === null) return;
        if (appState.blockScreen === false) {
            enableBodyScroll(element.current);
        } else {
            disableBodyScroll(element.current);
        }
    }, [appState.blockScreen]);

    return <div ref={element} className={classes.join(' ')}></div>;
};

export default BlockScreenOverlay;
