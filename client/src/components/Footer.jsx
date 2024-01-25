import "./Footer.css";
import { introductionPage } from "../assets/profile-user.js";

const Footer = () => {
    const { socials, socialsLinks } = introductionPage;

    const date = new Date().getFullYear();
    return (
        <div className="footer-container">
            <div className="footer-rights">
                Copyright ©{date}. All rights are reserved
            </div>
            <span className="dev-info-contacts">
                {socials.map((Social, index) => (
                    <a className="icon" key={index} href={socialsLinks[index]} target="_blank">
                        <Social color="white"/>
                    </a>
                ))}
            </span>
        </div>
    );
};

export default Footer;
