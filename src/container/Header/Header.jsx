import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import images from '../../constants/images';


const Header = () => (
  <div className='app__header app__wrapper section__padding custom__wrapper' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Web Developer / Programmer"/>
      <h1 className='app__header-h1'>Larence Arroz</h1>
      <p className='p__paragraph_font' style={{margin:'2rem 0'}}>Hello! I'm Larence, a passionate Web Developer and Programmer based in Iloilo, Philippines. I specialize in WordPress development, including theme customization, plugin integration, and WooCommerce solutions, using HTML, CSS, JavaScript, and PHP.</p>
      <div className='banner__buttons'>
        <button type='button' className='custom__button'>Contact Me</button>
        <button type='button' className='custom__button'>Download Resume</button>
      </div>
      
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcome img'/>
    </div>
  </div>
);

export default Header;
