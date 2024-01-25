import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";

import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { SiSololearn } from "react-icons/si";

export const introductionPage = {
    tabIcon: "",
    title: "🚀 Fullstack Developer 🇷🇴",
    description:
        "Fullstack developer in final year, skilled in React, Node.js, and MongoDB. Based in Bucharest, Romania. Passionate about crafting seamless web experiences.",
    aboutMeTitle:
        "Passionate Fullstack Developer and life-long learner based in Bucharest, Romania | Hamdan Ahmed",
    aboutMeDescription:
        "Hello! I'm Hamdan Ahmed, a passionate and results-driven Fullstack Developer currently in my final year of studies. Based in Bucharest, Romania. I specialize in creating end-to-end web solutions that seamlessly blend functionality and aesthetics. I am a person of learning. One of my goals is to thrive in better understanding the world in which we are living in through numbers and other data types.",
    socials: [FiGithub, BsLinkedin],
    socialsLinks: [
        "https://github.com/Ahamdan114/",
        "https://www.linkedin.com/in/ahmed-iulian-hamdan/",
    ],
    skills: [FaHtml5, IoLogoCss3, SiExpress, GrReactjs],
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
        arrows: false
    },
};
