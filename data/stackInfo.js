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
                    'I worked a whole lot with Stencil in the last year, building a design system for a large web infrastructure. I enjoy working with web components, and I find the Stencil syntax particularly interesting. Working with this technology has allowed me to gain experience in working with a large codebase and make delicate decisions that could potentially affect other parts of the infrastructure.',
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
                    'I am very thoughtful of SEO-relevant aspects when developing, independently from which framework or Technology I am using. I am familiar with posssible SEO obstacles such as Cumulative Layout Shift, Largest Content Paint, and others. I always make sure in the Planning phase that the code that I am going to write takes also into consideration these important SEO parameters.',
                icon: <Google />,
            },
            {
                title: 'CSS & SCSS',
                description:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
                icon: <CSS />,
            },
            {
                title: 'Python',
                description:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
                icon: <Python />,
            },
        ],
    },
    de: {
        title: 'My Stack',
        subtext: 'The technologies that I enjoy the most working with',
        stackList: [
            {
                title: 'Stencil',
                description:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
                icon: <Stencil />,
            },
            {
                title: 'Vue',
                description:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
                icon: <Vue />,
            },
            {
                title: 'React',
                description:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
                icon: <React />,
            },
            {
                title: 'Vanilla JS',
                description:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
                icon: <JavaScript />,
            },
            {
                title: 'CSS',
                description:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
                icon: <CSS />,
            },
            {
                title: 'Python',
                description:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
                icon: <Python />,
            },
        ],
    },
};
