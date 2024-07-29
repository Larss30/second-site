import React from "react";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div
    className="app__aboutus flex__center section__padding flex__column app__header"
    id="contact"
  >
    <h3 className="headtext__white__large">
      Contact Me
      <img src={images.waves} alt="waves image" className="waves__img" />
      <a href="mailto:larencearroz@gmail.com" className="contact_detail_item">
        <img src={images.mail} alt="email image" className="mail__icon" /> larencearroz@gmail.com
      </a>
      <a href="tel:+639158189236" className="contact_detail_item">
        <img src={images.phone} alt="phone image" className="phone__icon" /> +63 915 818 9236
      </a>
      <a href="https://join.skype.com/invite/phchWcPrp5Os" className="contact_detail_item" style={{textTransform:'capitalize'}}>
        <img src={images.skype} alt="phone image" className="skype__icon"/> Skype: Larence Arroz
      </a>
    </h3>
  </div>
);



export default Footer;
