import { sitel, coreco, graduate, wipro } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Graduation",
        company_name: "City Primier College",
        icon: graduate,
        iconBg: "#accbe1",
        date: "March 2016 - April 2018",
        points: [
            "Graduated with a Degree of Bachelors in Commerce and Computer Application (BCCA).",
        ],
    },
    {
        title: "Remote Support Engineer",
        company_name: "Wipro Limited",
        icon: wipro,
        iconBg: "#fbc3bc",
        date: "Jan 2019 - Feb 2020",
        points: [
            "Providing technical support to the international clients on call, or on remote.",
            "Hands-On experience on Microsoft server, Ticketing tools, and SLA's.",
            "Experience in handling the customer relationship with international companies",
            "Gained experience in customer management, international user from different countries like USA, Egypt, Dubai, Australia etc.",
        ],
    },
    {
        title: "Customer Support Engineer",
        company_name: "Sitel India Pvt Ltd.",
        icon: sitel,
        iconBg: "#b7e4c7",
        date: "Jan 2020 - Jan 2021",
        points: [
            "Providing technical support to the international clients on call, or on remote.",
            "Hands-On experience on Microsoft server, Ticketing tools, and SLA's.",
            "Experience in handling the customer relationship with international companies.",
            "Gained experience in customer management, international user from different countries like USA, Egypt, Dubai, Australia etc.",
        ],
    },
    {
        title: "DevOps Engineer",
        company_name: "CoReCo Technologies",
        icon: coreco,
        iconBg: "#a2d2ff",
        date: "Jan 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ambaskaryash',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/yash-ambaskar119/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Card Game',
        description: 'Magic card game using Javascript',
        link: 'https://cardgame-ambaskaryash.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Earth Model in THREE.JS',
        description: 'Earth model created in threejs, with a moon and a sun',
        link: 'https://codepen.io/ambaskaryash/full/YzazaNo',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Room Project',
        description: '3D Room project (Project Credits : Bruno Simon)',
        link: 'https://github.com/ambaskaryash/my-room-in-3d',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Cradle Project made in Codepen',
        description: 'Cradle project created using Javascript',
        link: 'https://codepen.io/ambaskaryash/full/KKoKQJg',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Digital Hosting by Litemere NFP',
        description: 'Litemere hosting NFP, a Not-for-profit charity in the United States of America, provides services, Volunteered in creating a charity website for a Giveaway. Sponsored by Chad Williams',
        link: 'https://litemere.org/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'The Secret Shop Nagpur',
        description: 'Very famous fast food joint which serves various types of Burgers, Fries and many more.',
        link: 'https://thesecretshop.in',
    }
];