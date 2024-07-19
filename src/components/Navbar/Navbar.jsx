import React, { useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";

const navbarMenu = [
  {
    menuText: "Home",
    menuLink: "#home",
  },
  {
    menuText: "Skills",
    menuLink: "#skills",
  },
  {
    menuText: "Tools",
    menuLink: "#tools",
  },
  {
    menuText: "Projects",
    menuLink: "#landing",
  },
];

const Navbar = () => {
  return (
    <nav className="app__navbar section__padding">
      <div className="app__navbar-logo">
        <h3 className='app__header-h3'>Larence</h3>
      </div>
      <ul className="app__navbar-links">
        {navbarMenu.map((item, index) => (
          <li className="p__paragraph_font" key={item.menuText + index}>
            <a href={item.menuLink}>{item.menuText}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <button type='button' className='custom__button'>Contact Me</button>
        <a className="btn" href="mailto:larencearroz@gmail.com">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
