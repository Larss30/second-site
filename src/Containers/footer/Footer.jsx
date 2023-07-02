import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const footerLinks  = [
  {
    menuText: "Overons",
    menuLink: "#overons"
  },
  {
    menuText: "Social Media",
    menuLink: "#social-media"
  },
  {
    menuText: "Counters",
    menuLink: "#counters"
  },
  {
    menuText: "Contact",
    menuLink: "#contact"
  },
]

const footerCompany  = [
  {
    menuText: "Terms & Conditions",
    menuLink: "#terms-and-conditions"
  },
  {
    menuText: "Privacy Policy ",
    menuLink: "#privacy-policy"
  },
  {
    menuText: "Contact",
    menuLink: "#contact"
  },
]
const footerContact  = [
  {
    menuText: "Crechterwoord K12 182 DK Alknjkcb",
    menuLink: "#location"
  },
  {
    menuText: "+63 (915) 818 9236",
    menuLink: "tel: +639158189236"
  },
  {
    menuText: "larencearroz@gmail.com",
    menuLink: "mailto:larencearroz@gmail.com"
  },
]

const Footer = () => {
  return (
    <div className='gpt3_footer section_padding'>
      <h2 className='gradient_text'>Do you want to step in to the future before others</h2>
      <p className='button-wrapper'><button>Request Early Access</button></p>
      <div className='gpt3_footer-menu'>
        <div className='gpt3_footer-menu-heading'>
          <img src={logo} alt='logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3_footer-menu-links'>
          <h5>Links</h5>
          <ul>
            {footerLinks.map((item) => 
            <li><a href={item.menuLink}>{item.menuText}</a></li>
            )}
          </ul>
        </div>
        <div className='gpt3_footer-menu-company'>
          <h5>Company</h5>
          <ul>
            {footerCompany.map((item) => 
            <li><a href={item.menuLink}>{item.menuText}</a></li>
            )}
          </ul>
        </div>
        <div className='gpt3_footer-menu-get_in_touch'>
          <h5>Get In Touch</h5>
          <ul>
            {footerContact.map((item) => 
            <li><a href={item.menuLink}>{item.menuText}</a></li>
            )}
          </ul>
        </div>
      </div>
      <div className='gpt3_footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer