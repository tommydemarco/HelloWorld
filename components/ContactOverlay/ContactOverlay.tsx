import { useContext, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styles from './ContactOverlay.module.scss';

// context
import { AppContext, APP_ACTION_TYPES } from '../../context';

const ContactOverlay = () => {
    const element = useRef<HTMLDivElement>(null);
    const { appState } = useContext(AppContext)!;

    const classes = [styles['contact-overlay']];
    if (appState.blockScreen) classes.push(styles['contact-overlay--active']);

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

export default ContactOverlay;
