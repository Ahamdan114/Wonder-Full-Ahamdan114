import "./Footer.css";
import { introductionPage } from "../assets/profile-user.js";

const Footer = () => {
    const socials = introductionPage.socials;

    const date = new Date().getFullYear();
    return (
        <div className="footer-container">
            <div className="footer-rights">
                Copyright ©{date}. All rights are reserved
            </div>
            <span className="dev-info-contacts">
                {socials.map((Social, index) => (
                    <Social key={index} className="icon" />
                ))}
            </span>
        </div>
    );
};

export default Footer;
