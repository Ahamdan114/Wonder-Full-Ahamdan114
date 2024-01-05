import "./Footer.css";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="footer-container">Copyright ©{date}. All rights are reserved</div>
    );
};

export default Footer;
