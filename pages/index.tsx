import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';

// components
import BlockScreenOverlay from '../components/BlockScreenOverlay';
import ContactCard from '../components/ContactCard';
import EducationCard from '../components/EducationCard';
import ScrollHero from '../components/ScrollHero';
import StartHero from '../components/StartHero';
import StackCard from '../components/StackCard';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import FooterLink from '../components/FooterLink';
import WorkCard from '../components/WorkCard';
import ImageViewer from '../components/ImageViewer';

// context
import { AppContext, APP_ACTION_TYPES } from '../context';

// utils
import { scrollToElement } from '../utils/scrollToElement';

// data
import { contactInfo } from '../data/contactInfo';
import { general } from '../data/general';
import { educationInfo } from '../data/educationInfo';
import { startInfo } from '../data/startInfo';
import { stackInfo } from '../data/stackInfo';
import { workInfo } from '../data/workInfo';
import { footerInfo } from '../data/footerInfo';
import { devCheckerInfo } from '../data/devCheckerInfo';

// types
import { GetStaticProps } from 'next';
import { EducationInfo } from '../data/educationInfo.types';
import { StackInfo } from '../data/stackInfo.types';
import { WorkInfo } from '../data/workInfo.types';
import DevToolsChecker from '../components/DevToolsChecker/DevToolsChecker';

interface HomePageProps {
    locale: 'en' | 'de';
}

const Home: React.FC<HomePageProps> = ({ locale }) => {
    const { appState, appDispatch } = useContext(AppContext)!;

    const chosenLocale = appState.chosenLocale || locale;

    const scrollToContacts = () => {
        scrollToElement('#contacts #section-middle');
        setTimeout(() => {
            appDispatch({
                type: APP_ACTION_TYPES.SET_CONTACT_ACTIVE,
                payload: true,
            });
        }, 300);
    };

    useEffect(() => {
        appDispatch({
            type: APP_ACTION_TYPES.SET_CHOSEN_LOCALE,
            payload: chosenLocale,
        });
    }, []);

    return (
        <>
            <Head>
                <title>{general[chosenLocale].pageTitle}</title>
                <meta
                    name="description"
                    content={general[chosenLocale].description}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu
                links={[
                    {
                        linkText: stackInfo[chosenLocale].title,
                        sectionId: 'stack',
                    },
                    {
                        linkText: workInfo[chosenLocale].title,
                        sectionId: 'work',
                    },
                    {
                        linkText: educationInfo[chosenLocale].title,
                        sectionId: 'education',
                    },
                    {
                        linkText: contactInfo[chosenLocale].headline,
                        sectionId: 'contacts',
                    },
                ]}
            />
            <main>
                <StartHero
                    headline={startInfo[chosenLocale].helloWorld}
                    subtext={startInfo[chosenLocale].subtext}
                    imageSrc="/portrait-min.jpg"
                    imageAlt={startInfo[chosenLocale].imageAlt}
                    buttonText={startInfo[chosenLocale].buttonText}
                />
                <ScrollHero
                    sectionId="stack"
                    headline={stackInfo[chosenLocale].title}
                    subtext={stackInfo[chosenLocale].subtext}
                    height="650vh"
                >
                    {stackInfo[chosenLocale].stackList.map(
                        (stackInfo: StackInfo) => {
                            return (
                                <StackCard
                                    key={stackInfo.title}
                                    title={stackInfo.title}
                                    description={stackInfo.description}
                                    icon={stackInfo.icon}
                                />
                            );
                        },
                    )}
                </ScrollHero>
                <ScrollHero
                    sectionId="work"
                    headline={workInfo[chosenLocale].title}
                    subtext={workInfo[chosenLocale].subtext}
                    height="400vh"
                    primary
                >
                    {workInfo[chosenLocale].workList.map(
                        (workInfo: WorkInfo) => {
                            return (
                                <WorkCard
                                    key={workInfo.title}
                                    title={workInfo.title}
                                    company={workInfo.company}
                                    description={workInfo.description}
                                    timeRange={workInfo.timeRange}
                                />
                            );
                        },
                    )}
                </ScrollHero>
                <ScrollHero
                    sectionId="education"
                    headline={educationInfo[chosenLocale].title}
                    subtext={educationInfo[chosenLocale].subtext}
                    height="400vh"
                >
                    {educationInfo[chosenLocale].educationList.map(
                        (educationInfo: EducationInfo) => {
                            return (
                                <EducationCard
                                    key={educationInfo.title}
                                    title={educationInfo.title}
                                    type={educationInfo.type}
                                    organization={educationInfo.organization}
                                    time={educationInfo.time}
                                    description={educationInfo.description}
                                    buttonText={educationInfo.buttonText}
                                    assetLink={educationInfo.assetLink}
                                />
                            );
                        },
                    )}
                </ScrollHero>
                <ScrollHero
                    sectionId="contacts"
                    headline={contactInfo[chosenLocale].headline}
                    subtext={contactInfo[chosenLocale].subtext}
                    height="330vh"
                    card
                    primary
                >
                    <ContactCard
                        name={contactInfo[chosenLocale].name}
                        profession={contactInfo[chosenLocale].profession}
                        location={contactInfo[chosenLocale].location}
                        phone={contactInfo[chosenLocale].phone}
                        email={contactInfo[chosenLocale].email}
                        github={contactInfo[chosenLocale].github}
                        linkedin={contactInfo[chosenLocale].linkedin}
                    />
                </ScrollHero>
                <Footer
                    textTitle={footerInfo[chosenLocale].textTitle}
                    textBody={footerInfo[chosenLocale].textBody}
                    endText={footerInfo[chosenLocale].endText}
                >
                    <FooterLink
                        element="link"
                        href={footerInfo[chosenLocale].github.link}
                    >
                        {footerInfo[chosenLocale].github.text}
                    </FooterLink>
                    <FooterLink
                        element="link"
                        href={footerInfo[chosenLocale].linkedin.link}
                    >
                        {footerInfo[chosenLocale].linkedin.text}
                    </FooterLink>
                    <FooterLink element="button" onClick={scrollToContacts}>
                        {footerInfo[chosenLocale].contacts.text}
                    </FooterLink>
                    <FooterLink
                        element="link"
                        href={footerInfo[chosenLocale].codewars.link}
                    >
                        {footerInfo[chosenLocale].codewars.text}
                    </FooterLink>
                </Footer>
            </main>
            {appState.imageOpen !== false && (
                <ImageViewer
                    imgSrc={appState.imageOpen.imgSrc}
                    imgAlt={appState.imageOpen.imgAlt}
                />
            )}
            <DevToolsChecker
                title={devCheckerInfo[chosenLocale].title}
                text={devCheckerInfo[chosenLocale].text}
            />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            locale: context.locale,
        },
    };
};

export default Home;
