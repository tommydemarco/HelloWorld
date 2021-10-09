// components
import SectionHeadline from '../SectionHeadline';

import styles from './StartHero.module.scss';

interface StartHeroProps {
    headline: string;
    subtext: string;
    imageSrc?: string;
    imageAlt?: string;
}

const StartHero: React.FC<StartHeroProps> = (props) => {
    return (
        <section className={styles['start-hero']}>
            <div className={styles['start-hero__inner-container']}>
                <div className={styles['start-hero__image-block']}></div>
                <div className={styles['start-hero__text-block']}>
                    <SectionHeadline element="div" main>
                        {props.headline}
                    </SectionHeadline>
                    <p className={styles['start-hero__subtext']}>
                        {props.subtext}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StartHero;
