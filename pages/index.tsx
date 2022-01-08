import { useState, useContext } from 'react';
import Head from 'next/head';

// components
import ContactCard from '../components/ContactCard';
import EducationCard from '../components/EducationCard';
import ScrollHero from '../components/ScrollHero';
import StartHero from '../components/StartHero';
import StackCard from '../components/StackCard';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import FooterLink from '../components/FooterLink';
import WorkCard from '../components/WorkCard';

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

// types
import { GetStaticProps } from 'next';
import { EducationInfo } from '../data/educationInfo.types';
import { StackInfo } from '../data/stackInfo.types';
import { WorkInfo } from '../data/workInfo.types';

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
                type: APP_ACTION_TYPES.SET_CONTACT_HIGHLIGHT,
                payload: true,
            });
        }, 300);
    };

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
            <Menu />
            <main>
                <StartHero
                    headline={startInfo[chosenLocale].helloWorld}
                    subtext={startInfo[chosenLocale].subtext}
                    imageSrc="/portrait.jpg"
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
                    sectionId="work-experience"
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
                                    description={workInfo.description}
                                    timeRange={workInfo.timeRange}
                                />
                            );
                        },
                    )}
                </ScrollHero>
                <ScrollHero
                    sectionId="education-info"
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
