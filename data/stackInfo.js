import Vue from '../assets/svgs/logo-vue.svg';
import Stencil from '../assets/svgs/logo-stencil.svg';
import React from '../assets/svgs/logo-react.svg';
import JavaScript from '../assets/svgs/logo-javascript.svg';
import CSS from '../assets/svgs/logo-css3.svg';
import Python from '../assets/svgs/logo-python.svg';
import Google from '../assets/svgs/logo-google.svg';

export const stackInfo = {
    en: {
        title: 'My Stack',
        subtext: 'The technologies that I enjoy the most working with',
        stackList: [
            {
                title: 'Stencil',
                description:
                    'I worked a whole lot with Stencil in the past year, building a design system for a large web infrastructure. I enjoy working with web components, and I find the Stencil syntax particularly interesting. Working with this technology has allowed me to gain experience in working with a large codebase and make delicate decisions that could potentially affect other parts of the infrastructure.',
                icon: <Stencil />,
            },
            {
                title: 'Vue',
                description:
                    "Vue was the very first Frontend-Framework that I have used, and even though I don't get to work much with it anymore, due to stack decisions of my current employer, I still play and experiment with Vue often, as I think it is a really valid solution, with a lot of different perks, such as an arguably easier state management architecture. For Server Side Rendering I have used Nuxt up until now.",
                icon: <Vue />,
            },
            {
                title: 'React',
                description:
                    'By far my favourite Frontend-Framework/Library, and not because I have a few bucks invested in Meta. I have worked on several big projects with React, I love JSX and a more declarative programming paradigm, and I particularly enjoy working with Frameworks based on React, such as Next.js and Gatsby, which I think really do an incredible job at providing a production ready environment.',
                icon: <React />,
            },
            {
                title: 'Vanilla JS',
                description:
                    'While working with React involves a more declarative approach, working with Stencil also allowed me to work in a more imperative paradigma, that mainly uses Classes and Vanilla JavaScript in order to build the core logic. I also have experience working on legacy code written in jQuery, although I would not say it is my first choice (nor is it the second) when it comes to stack decisions.',
                icon: <JavaScript />,
            },
            {
                title: 'SEO for Frontend',
                description:
                    'I am very thoughtful of SEO-relevant aspects when developing, independently from which framework or Technology I am using. I am familiar with posssible SEO obstacles such as Cumulative Layout Shift, Cumulative Layout Shift, Largest Contentful Paint, Speed Index and more. I always make sure in the Planning phase that the code that I am going to write takes also into consideration these important SEO parameters.',
                icon: <Google />,
            },
            {
                title: 'CSS & SCSS',
                description:
                    'Während meiner Ausbildung zum Webentwickler war CSS definitiv eines der Dinge, die mir am meisten Spaß gemacht haben. Während meiner Berufserfahrung konnte ich auch meine Fähigkeiten verbessern, an großen Codebasen zu arbeiten und semantisch korrekte Entscheidungen zu treffen, die zu einer besseren Codequalität, Architektur und Leistung beitragen.',
                icon: <CSS />,
            },
            {
                title: 'Python',
                description:
                    'Even though I am not using the Python language in my current position, I really like to experience with it, and in the HarvardX course I took recently (see education section) I could extend my knowledge of Python as a backend language with the Django Framework. I am also a Cetrified Associate in Python Programming, certificate issued by the Python Institute.',
                icon: <Python />,
            },
        ],
    },
    de: {
        title: 'Mein Stack',
        subtext: 'Die Technologien, mit denen ich am meisten Erfahrung habe',
        stackList: [
            {
                title: 'Stencil',
                description:
                    'Ich habe im letzten Jahr viel mit Stencil gearbeitet, um ein Designsystem für eine große Webinfrastruktur aufzubauen. Ich arbeite gerne mit Webkomponenten und finde die Stencil-Syntax sehr interessant. Die Arbeit mit dieser Technologie hat es mir ermöglicht, Erfahrungen mit heikle Entscheidungen zu machen, die sich auch auf andere Teile der Infrastruktur auswirken könnten.',
                icon: <Stencil />,
            },
            {
                title: 'Vue',
                description:
                    'Vue war das erste Frontend-Framework, mit dem ich gearbeitet habe, und obwohl ich aufgrund von Stack-Entscheidungen meines jetzigen Arbeitgebers nicht mehr viel damit zu tun habe, experimentiere ich immer noch oft mit Vue: ich finde es ist eine wirklich gültige Lösung mit vielen verschiedenen Vorteilen, wie einer wohl einfacheren State-Management-Architektur.',
                icon: <Vue />,
            },
            {
                title: 'React',
                description:
                    'Mein Lieblings-Frontend-Framework/Library, nicht nur weil ich ein paar Dollar in Meta investiert habe. Ich habe an mehreren großen Projekten mit React gearbeitet, ich liebe JSX und sein deklarativeres Programmierparadigma. Ich arbeite besonders gerne mit Frameworks, die auf React basieren: Next.js und Gatsby, die meiner Meinung nach wirklich eine produktionsbereite Umgebung liefern.',
                icon: <React />,
            },
            {
                title: 'Vanilla JS',
                description:
                    'Während die Arbeit mit React einen eher deklarativen Ansatz beinhaltet, ermöglichte mir die Arbeit mit Stencil auch, in einem Imperative-Paradigma zu arbeiten, das hauptsächlich Klassen und Vanilla-JavaScript verwendet, um die Kernlogik aufzubauen. Ich habe auch Erfahrung mit der Arbeit an in jQuery geschriebenem Legacy-Code, obwohl ich nicht sagen würde, dass dies meine erste Stack-Wahl ist.',
                icon: <JavaScript />,
            },
            {
                title: 'SEO for Frontend',
                description:
                    'Ich achte bei der Entwicklung sehr auf SEO-relevante Aspekte, unabhängig davon, welches Framework oder welche Technologie ich verwende. Ich kenne mögliche SEO-Hindernisse wie Cumulative Layout Shift, Largest Contentful Paint, Speed Index und mehr. Ich achte in der Planungsphase immer darauf, dass der Code, den ich schreibe, auch diese wichtigen SEO-Parameter berücksichtigt.',
                icon: <Google />,
            },
            {
                title: 'CSS & SCSS',
                description:
                    'Während meiner Ausbildung zum Webentwickler war CSS definitiv eines der Dinge, die mir am meisten Spaß gemacht haben. Während meiner Berufserfahrung konnte ich auch meine Fähigkeiten verbessern, an großen Codebasen zu arbeiten und semantisch korrekte Entscheidungen zu treffen, die zu einer besseren Codequalität, Architektur und Leistung beitragen.',
                icon: <CSS />,
            },
            {
                title: 'Python',
                description:
                    'Auch wenn ich Python in meiner jetzigen Position nicht nutze, mache ich gerne Erfahrungen damit, und in dem HarvardX-Kurs, den ich kürzlich bestanden habe (siehe Ausbildung-Abschnitt) konnte ich meine Kenntnisse über Python als Backend-Sprache mit dem Django Framework erweitern. Ich bin auch ein Certified Associate in Python Programming, ein Zertifikat vom Python Institute.',
                icon: <Python />,
            },
        ],
    },
};
