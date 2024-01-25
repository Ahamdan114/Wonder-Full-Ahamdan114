import React from "react";

import { introductionPage } from "../assets/profile-user.js";
import profilePicture from "../assets/profile-picture.jpg";
import "./IntroductionCard.css";
import Skills from "./Skills";

const IntroductionCard = () => {
    const { title, description } = introductionPage;
    const { socials, socialsLinks } = introductionPage;

    return (
        <div className="dev-introduction">
            <div className="dev-container">
                <div className="dev-info">
                    <h1 className="dev-info-title">{title}</h1>
                    <p className="dev-info-description">{description}</p>
                    <span className="dev-info-contacts">
                        {socials.map((Social, index) => (
                            <a className="icon" key={index} href={socialsLinks[index]} target="_blank">
                                <Social />
                            </a>
                        ))}
                    </span>
                </div>
                <div className="dev-background">
                    <img
                        className="dev-picture"
                        src={profilePicture}
                        alt="profile-picture"
                    />
                </div>
            </div>
            <Skills />
        </div>
    );
};

export default IntroductionCard;
