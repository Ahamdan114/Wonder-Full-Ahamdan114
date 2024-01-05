import React from "react";
import { introductionPage } from "../assets/profile-user.js";
import { Link } from "react-scroll";

import "./Navbar.css";

const NavBar = () => {
    const { navBar } = introductionPage;

    return (
        <div className="nav-container">
            <div className="nav-show">Ahmed.dev</div>
            <ul className="nav-list">
                {navBar.map((text, i) => (
                    <li key={i}>
                        <Link to={text} smooth={true} duration={500 + 100 * i}>{text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavBar;
