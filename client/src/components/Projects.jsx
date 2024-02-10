import "./Projects.css";

import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { introductionPage } from "../assets/profile-user";
import { TbLiveView } from "react-icons/tb";
import Moviex from "../assets/Moviex.png";
import FutureAI from "../assets/FutureAI.png";
import FilmMosaic from "../assets/FilmMosaic.png";
import SmartExpense from "../assets/SmartExpense.png";


const Projects = () => {
    const { projects, settings } = introductionPage;
    const [currentSlide, setCurrentSlide] = useState(0);
    const imageArr = [Moviex, FutureAI, FilmMosaic, SmartExpense]

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [projects.length]);

    return (
        <div className="project-container" id="Projects">
            <Slider {...settings} className="slider">
                {projects.map(
                    ({ title, description, githubLink, liveLink }, index) => (
                        <div key={index} className="slider-child">
                            <div className="project-item">
                                <div className="project-info">
                                    <div className="project-intro">Projects</div>
                                    <h2 className="project-title">{title}</h2>
                                    <p className="project-description">{description}</p>
                                    <div className="project-links">
                                        <a
                                            href={githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="project-btn">
                                                <FaGithub /> GitHub
                                            </button>
                                        </a>
                                        <a
                                            href={liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="project-btn">
                                                <TbLiveView /> Live
                                            </button>
                                        </a> 
                                    </div>
                                </div>

                                <div className="project-background">
                                    <img
                                        className="project-img"
                                        src={imageArr[index]}
                                        alt={`Project ${index + 1}`}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </Slider>
        </div>
    );
};

export default Projects;
