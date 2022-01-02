import Image from 'next/image';
import SectionHeadline from '../SectionHeadline';
import Button from '../Button';
import styles from './StartHero.module.scss';

import scrollToElement from '../../utils/scrollToElement';

interface StartHeroProps {
    headline: string;
    subtext: string;
    imageSrc: string;
    imageAlt: string;
    buttonText: string;
}

const StartHero: React.FC<StartHeroProps> = (props) => {
    const scrollToStack = () => {
        scrollToElement('#stack');
    };

    return (
        <section className={styles['start-hero']}>
            <div className={styles['start-hero__inner-container']}>
                <div className={styles['start-hero__image-block']}>
                    <div className={styles['start-hero__image-container']}>
                        <Image
                            src={props.imageSrc}
                            height="700"
                            width="700"
                            alt={props.imageAlt}
                        />
                    </div>
                </div>
                <div className={styles['start-hero__text-block']}>
                    <SectionHeadline element="div" main>
                        {props.headline}
                    </SectionHeadline>
                    <p>{props.subtext}</p>
                    <div className={styles['start-hero__button-container']}>
                        <Button onClick={scrollToStack}>
                            {props.buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartHero;
