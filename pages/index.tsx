import type { NextPage } from 'next';
import Head from 'next/head';

// components
import StackHero from '../components/StackHero';
import StartHero from '../components/StartHero';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import FooterLink from '../components/FooterLink';

// data
import { stackInfo } from '../data/stackInfo';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Menu /> */}
            <main>
                <StartHero
                    headline="Hello World."
                    subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    imageSrc="/portrait.jpg"
                    imageAlt="A portrait of a web developer"
                />
                <StackHero
                    sectionId="stack"
                    headline="The stack"
                    subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    stackInfo={stackInfo}
                />
                <Footer
                    textTitle="Bye, World!"
                    textBody="Thank you for checking out my website: if you found it interesting click on the contact button and get in touch! I look forward top it!"
                    endText="Coded with &#10084; with Next.js and other cool stuff"
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

export default Home;
