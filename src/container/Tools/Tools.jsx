import React from 'react';
import { images } from '../../constants';
import './Tools.css';

const SpecialMenu = () => (
  <div className='app__aboutus app__bg flex__center section__padding flex__column' id='tools'>
    <h3 className='headtext__white__large'>Tools I Use<img src={images.waves} alt='waves image' className='waves__img'/></h3>
    <div className='app__aboutus-tools__grid flex__center'>
      <div className='app__aboutus-tools__grid-tool__item'>
        <img src={images.woocommerce} alt="tool__wordpress" className="wordpress__img tool__img wordpress__img" />
        <h5 className='headtext__white'>WooCommerce</h5>
        <p class="p__paragraph_font" style={{maxWidth:"300px", textAlign:"center"}}>A flexible eCommerce plugin for WordPress that enables the creation and management of online stores with features like product listings and payment processing.</p>
      </div>
      <div className='app__aboutus-tools__grid-tool__item'>
        <img src={images.acf} alt="tool__acf" className="acf__img tool__img acf__img" />
        <h5 className='headtext__white'>ACF</h5>
        <p class="p__paragraph_font" style={{maxWidth:"300px", textAlign:"center"}}>A WordPress plugin that allows the creation and management of custom fields for posts, pages, and custom content types, enhancing content flexibility and customization.</p>
      </div>
      <div className='app__aboutus-tools__grid-tool__item'>
        <img src={images.elementor} alt="tool__elementor" className="javascript__img tool__img javascript__img" />
        <h5 className='headtext__white'>Elementor</h5>
        <p class="p__paragraph_font" style={{maxWidth:"300px", textAlign:"center"}}>A WordPress page builder that provides a drag-and-drop interface to create and customize website pages with ease, offering various design elements and templates.</p>
      </div>
      <div className='app__aboutus-tools__grid-tool__item'>
        <img src={images.jquery} alt="tool__jquery" className="jquery__img tool__img jquery__img" />
        <h5 className='headtext__white'>jQuery</h5>
        <p class="p__paragraph_font" style={{maxWidth:"300px", textAlign:"center"}}>A fast, lightweight JavaScript library used in WordPress for simplifying HTML document traversal, event handling, and animation, enhancing the functionality and interactivity of websites.</p>
      </div>
    </div>
    <div className='app__aboutus-tools__grid flex__center'>
      <div className='app__aboutus-tools__grid-tool__item'>
        <img src={images.cpanel} alt="tool__cpanel" className="cpanel__img tool__img cpanel__img" />
        <h5 className='headtext__white'>CPanel</h5>
        <p class="p__paragraph_font" style={{maxWidth:"300px", textAlign:"center"}}>cPanel is a web hosting control panel that provides a graphical interface and automation tools to simplify the management of websites, email accounts, and server settings.</p>
      </div>
      <div className='app__aboutus-tools__grid-tool__item'>
        <img src={images.zapier} alt="tool__zapier" className="zapier__img tool__img zapier__img" />
        <h5 className='headtext__white'>Zapier</h5>
        <p class="p__paragraph_font" style={{maxWidth:"300px", textAlign:"center"}}>An automation tool that connects different apps and services, allowing workflows to be automated by triggering actions based on events in various applications.</p>
      </div>
      <div className='app__aboutus-tools__grid-tool__item'>
        <img src={images.bootstrap} alt="tool__bootstrap" className="bootstrap__img tool__img bootstrap__img" />
        <h5 className='headtext__white'>Bootstrap</h5>
        <p class="p__paragraph_font" style={{maxWidth:"300px", textAlign:"center"}}>A front-end framework that provides pre-designed components and responsive grid layouts to streamline the development of mobile-first websites and applications.</p>
      </div>
      <div className='app__aboutus-tools__grid-tool__item'>
        <img src={images.ionic} alt="tool__ionic" className="ionic__img tool__img ionic__img" />
        <h5 className='headtext__white'>Ionic</h5>
        <p class="p__paragraph_font" style={{maxWidth:"300px", textAlign:"center"}}>A framework for building cross-platform mobile apps using web technologies like HTML, CSS, and JavaScript, offering pre-built UI components and native functionality.</p>
      </div>
    </div>
    <h3 className='headtext__white__large' style={{fontSize:'30px'}}>... and many more!</h3>
    <div className='app__aboutus-tools__grid flex__center'></div>
  </div>
);

export default SpecialMenu;
