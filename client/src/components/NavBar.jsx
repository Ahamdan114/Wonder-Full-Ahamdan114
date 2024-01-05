import React from 'react'
import { introductionPage } from "../assets/profile-user.js";

import "./Navbar.css"

const NavBar = () => {
    const { navBar } = introductionPage;

  return (
    <div className='nav-container'>
        <div className='nav-show'>Ahmed.dev</div>
        <ul className='nav-list'>{navBar.map((text, i) => <li key={i}>{text}</li>)}</ul>
    </div>
  )
}

export default NavBar