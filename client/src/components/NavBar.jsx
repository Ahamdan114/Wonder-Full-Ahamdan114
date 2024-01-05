import React, { useState } from "react";
import { introductionPage } from "../assets/profile-user.js";
import { Link } from "react-scroll";

import "./Navbar.css";

const NavBar = () => {
    const { navBar } = introductionPage;
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="nav-container">
            <div className="nav-show">Ahmed.dev</div>
            <button className="nav-icon" onClick={toggleNav}>
                ☰
            </button>
            <ul className={`nav-list ${isActive ? "active" : ""}`}>
                {navBar.map((text, i) => (
                    <li key={i}>
                        <Link
                            to={text}
                            smooth={true}
                            duration={500 + 100 * i}
                            onClick={toggleNav}
                        >
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavBar;
