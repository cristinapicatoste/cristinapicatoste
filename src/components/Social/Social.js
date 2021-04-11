import React from 'react';
import { ReactComponent as Github } from '../../assets/icono_github.svg';
import { ReactComponent as Linkedin } from '../../assets/icono_linkedin.svg';
import { ReactComponent as Whatsapp } from '../../assets/icono_whatsapp.svg';
import * as route from '../../routes/routes';

import './Social.scss';


const Social = () => {
  return (
    <div className="social">
      <a className="social-icons" href={route.GITHUB}><Github /></a>
      <a className="social-icons" href={route.LINKEDIN}><Linkedin /></a>
      <a className="social-icons" href={route.WHATSAPP}><Whatsapp /></a>
    </div>
  )
}

export default Social
