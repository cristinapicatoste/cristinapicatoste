import React from 'react';
import { ReactComponent as Logo } from '../../assets/LOGO_CRIS.svg';

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-wrap">
      <div className="contact-logo">
        <Logo className="navbar-logo" />
      </div>
      <h1>Cristina Picatoste</h1>
      <h4>FULL Stack Developer & UI/UX Designer</h4>
      <p>+34 625 963 637</p>
      <p>cristina.picatoste@gmail.com</p>
    </div>
  )
}

export default Contact;
