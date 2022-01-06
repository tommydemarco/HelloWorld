import { useState } from 'react';
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

// data
import { contactInfo } from '../data/contactInfo';
import { general } from '../data/general';
import { educationInfo } from '../data/educationInfo';
import { startInfo } from '../data/startInfo';
import { stackInfo } from '../data/stackInfo';
import { workInfo } from '../data/workInfo';

// types
import { GetStaticProps } from 'next';
import { EducationInfo } from '../data/educationInfo.types';
import { StackInfo } from '../data/stackInfo.types';
import { WorkInfo } from '../data/workInfo.types';

interface HomePageProps {
    locale: 'en' | 'de';
}

const Home: React.FC<HomePageProps> = ({ locale }) => {
    const [chosenLocale, setChosenLocale] = useState(locale);

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
                    headline="Work experience"
                    subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    height="400vh"
                    primary
                >
                    {workInfo.map((workInfo: WorkInfo) => {
                        return (
                            <WorkCard
                                key={workInfo.title}
                                title={workInfo.title}
                                description={workInfo.description}
                                timeRange={workInfo.timeRange}
                            />
                        );
                    })}
                </ScrollHero>
                <ScrollHero
                    sectionId="education-info"
                    headline="Education"
                    subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    height="400vh"
                >
                    {educationInfo[chosenLocale].map((educationInfo: any) => {
                        return (
                            <EducationCard
                                key={educationInfo.title}
                                title={educationInfo.title}
                                type={educationInfo.type}
                                organization={educationInfo.organization}
                                time={educationInfo.time}
                                assetLink={educationInfo.assetLink}
                            />
                        );
                    })}
                </ScrollHero>
                <ScrollHero
                    sectionId="contacts"
                    headline="Contacts"
                    subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    height="330vh"
                    card
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
                    textTitle="Bye, World!"
                    textBody="Thank you for checking out my website: if you found it interesting click on the contact button and get in touch! I look forward top it!"
                    endText="Coded with &#10084; using Next.js and other cool stuff"
                >
                    <FooterLink element="link" href="#">
                        Github
                    </FooterLink>
                    <FooterLink element="link" href="#">
                        Linkedin
                    </FooterLink>
                    <FooterLink element="link" href="#">
                        Contact me
                    </FooterLink>
                    <FooterLink element="link" href="#">
                        Codewars
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
