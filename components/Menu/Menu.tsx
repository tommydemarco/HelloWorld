import { useState, useEffect } from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles['menu']}>
            <div className={styles['menu__inner']}>
                <button aria-label="menu" className={styles['menu__button']}>
                    <span className={styles['menu__burger-menu']}></span>
                </button>
            </div>
        </div>
    );
};

export default Menu;
