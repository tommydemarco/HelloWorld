import Image from 'next/image';
import SectionHeadline from '../SectionHeadline';
import Button from '../Button';
import styles from './StartHero.module.scss';

interface StartHeroProps {
    headline: string;
    subtext: string;
    imageSrc: string;
    imageAlt: string;
}

const StartHero: React.FC<StartHeroProps> = (props) => {
    const scrollToContent = () => {};

    return (
        <section className={styles['start-hero']}>
            <div className={styles['start-hero__inner-container']}>
                <div className={styles['start-hero__image-block']}>
                    <div className={styles['start-hero__image-container']}>
                        <Image
                            src={props.imageSrc}
                            height="500"
                            width="500"
                            alt={props.imageAlt}
                        />
                    </div>
                </div>
                <div className={styles['start-hero__text-block']}>
                    <SectionHeadline element="div" main>
                        {props.headline}
                    </SectionHeadline>
                    <p className={styles['start-hero__subtext']}>
                        {props.subtext}
                    </p>
                    <div className={styles['start-hero__button-container']}>
                        <Button onClick={scrollToContent}>View my stack</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartHero;
