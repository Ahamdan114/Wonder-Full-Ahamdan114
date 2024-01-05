import "./AboutMe.css";
import { introductionPage } from "../assets/profile-user";
import codingImage from "../assets/codingImage.jpg";

const AboutMe = () => {
    const { aboutMeTitle, aboutMeDescription } = introductionPage;
    return (
        <div className="about-container" id="About Me">
            <div className="about-info">
                <div className="about-intro">About me</div>
                <h1 className="about-title">{aboutMeTitle}</h1>
                <p className="about-description">{aboutMeDescription}</p>
            </div>
            <div className="about-background">
                <img className="about-img" src={codingImage} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;
