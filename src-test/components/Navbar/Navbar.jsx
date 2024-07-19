import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'

const navbarMenu = [
  {
    menuText: "Home",
    menuLink: "#home"
  },
  {
    menuText: "Pages",
    menuLink: "#pages"
  },
  {
    menuText: "Contact Us",
    menuLink: "#contact-us"
  },
  {
    menuText: "Landing",
    menuLink: "#landing"
  },
]

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar section__padding'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo'/>
      </div>
      <ul className='app__navbar-links'>
        {
          navbarMenu.map((item, index) => 
            <li className='p__paragraph_font' key={item.menuText + index}><a href={item.menuLink}>{item.menuText}</a></li>
          )
        }
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__paragraph_font'>Login | Register</a>
        <div />
        <a href='#book' className='p__paragraph_font'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu color="#fff" fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen__links'>
            {
              navbarMenu.map((item, index) => 
                <li className='p__paragraph_font' key={item.menuText + index}><a href={item.menuLink}>{item.menuText}</a></li>
              )
            }
            </ul>
          </div>
        )}
      </div>
    </nav>
  )

};

export default Navbar;
