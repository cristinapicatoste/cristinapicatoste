import React from 'react';
import { ReactComponent as Github } from '../../assets/icono_github.svg';
import { ReactComponent as Linkedin } from '../../assets/icono_linkedin.svg';
import { ReactComponent as Whatsapp } from '../../assets/icono_whatsapp.svg';

import './Social.scss';


const Social = () => {
  return (
    <div className="social">
      <div className="social-icons"><Github /></div>
      <div className="social-icons"><Linkedin /></div>
      <div className="social-icons"><Whatsapp /></div>
      {/* <Github className="social-icons"/>
      <Linkedin className="social-icons"/>
      <Whatsapp className="social-icons"/> */}
    </div>
  )
}

export default Social
