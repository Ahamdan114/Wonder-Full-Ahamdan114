import { introductionPage } from "../assets/profile-user";
import AdditionalInfo from "./AdditionalInfo";
import "./ContactMe.css";

const ContactMe = () => {
    const {
        mail,
        location,
        contacts: [FaLocationDot, IoMdMail],
    } = introductionPage;
    return (
        <div className="contact-container" id="Contact Me">
            <div className="contact">Contact</div>
            <h1 className="contact-title">Feel free! Get in touch below! 📬👇</h1>
            <div className="contact-additional">
                <AdditionalInfo
                    icon={
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.google.ro/maps/place/Bucharest/@44.4701452,26.0870828,12z/data=!4m6!3m5!1s0x40b1f93abf3cad4f:0xac0632e37c9ca628!8m2!3d44.4267674!4d26.1025384!16zL20vMDk2Z20?entry=ttu"
                        >
                            <FaLocationDot />
                        </a>
                    }
                    alt={"Location"}
                    info={
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.google.ro/maps/place/Bucharest/@44.4701452,26.0870828,12z/data=!4m6!3m5!1s0x40b1f93abf3cad4f:0xac0632e37c9ca628!8m2!3d44.4267674!4d26.1025384!16zL20vMDk2Z20?entry=ttu"
                        >
                            {location}
                        </a>
                    }
                />
                <AdditionalInfo
                    icon={
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:hamdan.ahmed002@gmail.com"
                        >
                            <IoMdMail />
                        </a>
                    }
                    alt={"Mail"}
                    info={
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:hamdan.ahmed002@gmail.com"
                        >
                            {mail}
                        </a>
                    }
                />
            </div>
        </div>
    );
};

export default ContactMe;
