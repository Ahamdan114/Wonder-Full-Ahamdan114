import "./Projects.css";

import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { introductionPage } from "../assets/profile-user";
import { TbLiveView } from "react-icons/tb";
import codingImage from "../assets/codingImage.jpg";

const Projects = () => {
    const { projects, settings } = introductionPage;
    return (
        <div className="project-container" id="Projects">
            <Slider {...settings} className="slider">
                {projects.map(
                    ({ title, description, githubLink, liveLink, imageSrc }, index) => (
                        <div key={index} className="slider-child">
                            <div className="project-item">
                                <div className="project-info">
                                    <div className="project-intro">Projects</div>
                                    <h2 className="project-tite">{title}</h2>
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
                                        src={codingImage}
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
