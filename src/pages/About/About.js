import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-wrap">
      <div className="about-header">
        <p className="fadeInDown size1 medweight greyMedium experience">
          Creative, versatile, autonomous, analytical and hard-worker.
          Multidisciplinary, technical-creative profile with a business approach
          </p>
        <h1 className="fadeInLeft size5 grey">Cristina</h1>
        <h2 className="fadeInLeft size5 greyLight">Picatoste</h2>
        <p className="fadeInUp size1 greyMedium technologies">
          Piano and guitar player, Thai food lover and F1 fan.
          Interested in tech, innovation, cinema, philosophy and psicology.
          <br />
          Based in Barcelona.
          </p>
      </div>
      <div className="about-square">
        <div className="square-image fadeInRight" style={{ backgroundImage: `url(/images/crisabout.jpg)` }}></div>
        <h1 className="square-text greyLight size5 fadeInUpRotated">About Me</h1>
      </div>
    </div>
  )
}

export default About
