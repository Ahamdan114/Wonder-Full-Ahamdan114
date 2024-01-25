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
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            githubLink: "https://github.com/example/project1",
            liveLink: "https://example-project1.com",
            imageSrc: "project1.jpg",
        },
        {
            title: "Project 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            githubLink: "https://github.com/example/project2",
            liveLink: "https://example-project2.com",
            imageSrc: "project2.jpg",
        },
    ],
    settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    },
};
