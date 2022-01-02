import { useState, useEffect } from 'react';
import styles from './Menu.module.scss';

const Menu = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const buttonClasses = [styles['menu__button']];
    if (isOpen) buttonClasses.push(styles['menu__button--close']);

    const menuClasses = [styles['menu']];
    if (isOpen) menuClasses.push(styles['menu--open']);

    return (
        <div className={menuClasses.join(' ')}>
            <button
                aria-label="menu"
                className={buttonClasses.join(' ')}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={styles['menu__burger-menu']}></span>
            </button>
            <div className={styles['menu__background']}></div>
            <nav className={styles['menu__nav']} aria-hidden={!isOpen}>
                <ul className={styles['menu__list']}>
                    <li className={styles['menu__item']}>
                        <a href="./home" className={styles['menu__link']}>
                            Home
                        </a>
                    </li>
                    <li className={styles['menu__item']}>
                        <a href="./about" className={styles['menu__link']}>
                            About us
                        </a>
                    </li>
                    <li className={styles['menu__item']}>
                        <a
                            href="./testimonials"
                            className={styles['menu__link']}
                        >
                            Testimonials
                        </a>
                    </li>
                    <li className={styles['menu__item']}>
                        <a href="./contacts" className={styles['menu__link']}>
                            Contacts
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles['menu__language-change']}>
                <button
                    className={styles['menu__language-item']}
                    onClick={() => {}}
                >
                    EN
                </button>
                <button
                    onClick={() => {}}
                    className={styles['menu__language-item']}
                >
                    DE
                </button>
            </div>
        </div>
    );
};

export default Menu;
