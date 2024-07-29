import React from "react";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding flex__column"
    id="contact"
  >
    <h3 className="headtext__white__large">
      Projects
      <img src={images.waves} alt="waves image" className="waves__img" />
    </h3>
  </div>
);

export default Footer;