import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { introductionPage } from "../assets/profile-user";
import { TbLiveView } from "react-icons/tb";
import codingImage from "../assets/codingImage.jpg";

const Carousel = () => {
    const { projects, settings } = introductionPage;
    return (
        <Slider {...settings}>
            {projects.map(
                ({ title, description, githubLink, liveLink, imageSrc }, index) => (
                    <div key={index} className="project-item" id="Projects">
                        <div className="project-info">
                            <div className="project-intro">Projects</div>
                            <h2 className="project-tite">{title}</h2>
                            <p className="project-description">{description}</p>
                            
                        </div>

                        <div className="project-background">
                            <img
                                className="project-img"
                                src={codingImage}
                                alt={`Project ${index + 1}`}
                            />
                        </div>
                    </div>
                )
            )}
        </Slider>
    );
};

export default Carousel;
