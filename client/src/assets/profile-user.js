// Contacts

import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

// Beginner Skills

import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";

// Frameworks

import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

// Tables
import { DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";

export const introductionPage = {
    tabIcon: "",
    title: "🚀 Fullstack Developer 🇷🇴",
    description:
        "Fullstack developer in final year, skilled in different technologies related to JavaScript, such as React.js, Express.js, Node.js, MongoDB and others. Based in Bucharest, Romania. Passionate about crafting seamless web experiences.",
    aboutMeTitle:
        "Passionate Fullstack Developer and life-long learner based in Bucharest, Romania | Hamdan Ahmed",
    aboutMeDescription: `
        Hello! I'm Hamdan Ahmed, a final-year Fullstack Developer based in Bucharest, Romania. 
        I specialize in developing web solutions that excel in both functionality and visual appeal, providing a polished user experience.`,
    socials: [FiGithub, BsLinkedin],
    socialsLinks: [
        "https://github.com/Ahamdan114/",
        "https://www.linkedin.com/in/ahmed-iulian-hamdan/",
    ],
    skills: [
        FaHtml5,
        IoLogoCss3,
        TbBrandJavascript,
        SiExpress,
        GrReactjs,
        DiMongodb,
        TbSql,
    ],
    navBar: ["Home", "About Me", "Projects", "Contact Me"],
    contacts: [FaLocationDot, IoMdMail],
    location: "Bucharest, Romania",
    mail: "hamdan.ahmed002@gmail.com",
    projects: [
        {
            title: "Moviex",
            description: `
                A Netflix website clone for movie streaming organized by component folders, facing challenges related to redundancy. 
                This project provided insights into replicating website behavior, dynamically allocating classes for varied component displays.
            `,
            githubLink: "https://github.com/Ahamdan114/netflix-clone",
            liveLink: "https://ahamdan114.github.io/Moviex/",
            imageSrc: "assets/Moviex.png",
        },{
            title: "Open-future-AI",
            description: `
                A website showcasing AI's potential future impact, organized by components and layout containers. 
                Challenges in naming JSX tag classes were resolved using project paths. 
                This extensive project refined component reuse efficiency and enhanced styling skills with a focus on details and contrasts.
            `,
            githubLink: "https://github.com/Ahamdan114/open-minded-future-ai",
            liveLink: "https://ahamdan114.github.io/open-minded-future-ai/",
            imageSrc: "assets/FutureAI.png",
        },
        {
            title: "Film-Mosaic",
            description: `
                This movie poster collection website lacks specific organizational structure due to its single component rendered multiple times. 
                Development challenges centered around event handling, and the project provided learning opportunities in making dynamic API calls for data retrieval.
            `,
            githubLink: "https://github.com/Ahamdan114/Film-Mosaic",
            liveLink: "https://ahamdan114.github.io/Film-Mosaic/",
            imageSrc: "assets/FilmMosaic.png",
        },
        {
            title: "Smart-Expense",
            description: `
                An expense tracking application organized by components and context, with challenges in circulating props throughout the project. 
                The project taught effective state management using the Context API.
            `,
            githubLink: "https://github.com/Ahamdan114/Smart-Expense",
            liveLink: "https://ahamdan114.github.io/Smart-Expense/",
        },
    ],
    settings: {
        dots: false,
        infinite: true,
        speed: 2 * 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10 * 1000,
        loop: true,
        pauseOnHover: false,
        pauseOnFocus: true,
    },
};



// {
//     title: "StormDB",
//     description: `
//         This project involves creating and utilizing an SQL engine. 
//         The code is structured in a pipeline fashion, with stages for parsing syntax, logical interpretation, and file writing. 
//         Organizational and structural challenges of the database were addressed by implementing a clear plan, emphasizing explicit code writing. 
//         The project taught the importance of pre-planned organization and revealed many gaps in my programming knowledge which helped me become more aware in advance of
//         potential issues that might occur.
//     `,
//     githubLink: "https://github.com/Ahamdan114/StormDB",
//     liveLink: "https://example-project1.com",
//     imageSrc: "project1.jpg",
// },
