import React from "react";

import { introductionPage } from "../assets/profile-user.js";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import profilePicture from "../assets/profile-picture.jpg";

import "./IntroductionCard.css";

const IntroductionCard = () => {
    const { title, description } = introductionPage;
    return (
        <div className="introduction-container">
            <div className="introduction-info">
                <h1 className="introduction-info-title">{title}</h1>
                <p className="introduction-info-description">{description}</p>
                <span className="introduction-info-contacts">
                    <FiGithub className="icon"/>
                    <LiaLinkedin className="icon"/>
                </span>
            </div>
            <div className="introduction-info-background">
                <img
                    className="introduction-info-profile-picture"
                    src={profilePicture}
                    alt="profile-picture"
                />
            </div>
        </div>
    );
};

export default IntroductionCard;
