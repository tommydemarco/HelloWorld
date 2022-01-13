import { useState, useContext } from 'react';

// context
import { AppContext, APP_ACTION_TYPES } from '../../context';

import { scrollToElement } from '../../utils/scrollToElement';

import styles from './Menu.module.scss';

interface MenuProps {
    links: MenuLink[];
}

interface MenuLink {
    linkText: string;
    sectionId: string;
}

const Menu: React.FC<MenuProps> = ({ links }) => {
    const { appState, appDispatch } = useContext(AppContext)!;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const buttonClasses = [styles['menu__button']];
    if (isOpen) buttonClasses.push(styles['menu__button--close']);

    const menuClasses = [styles['menu']];
    if (isOpen) menuClasses.push(styles['menu--open']);

    const goToSection = (section: string): void => {
        setIsOpen(false);
        setTimeout(() => {
            scrollToElement(section);
        }, 500);
    };

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
            <nav className={styles['menu__nav']}>
                <ul className={styles['menu__list']}>
                    {links.map((link: MenuLink) => {
                        return (
                            <li
                                key={link.linkText}
                                className={styles['menu__item']}
                            >
                                <button
                                    onClick={() =>
                                        goToSection('#' + link.sectionId)
                                    }
                                    className={styles['menu__link']}
                                    aria-hidden={!isOpen}
                                >
                                    {link.linkText}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className={styles['menu__language-change']}>
                <button
                    className={styles['menu__language-item']}
                    onClick={() => {
                        appDispatch({
                            type: APP_ACTION_TYPES.SET_CHOSEN_LOCALE,
                            payload: 'en',
                        });
                    }}
                    aria-hidden={!isOpen}
                >
                    <span
                        style={
                            appState.chosenLocale === 'en'
                                ? {
                                      borderBottom: '3px solid white',
                                  }
                                : undefined
                        }
                    >
                        EN
                    </span>
                </button>
                <button
                    onClick={() => {
                        appDispatch({
                            type: APP_ACTION_TYPES.SET_CHOSEN_LOCALE,
                            payload: 'de',
                        });
                    }}
                    className={styles['menu__language-item']}
                    aria-hidden={!isOpen}
                >
                    <span
                        style={
                            appState.chosenLocale === 'de'
                                ? {
                                      borderBottom: '3px solid white',
                                  }
                                : undefined
                        }
                    >
                        DE
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Menu;
