import React from 'react';
import './About.scss';

const About = () => {
  return (
    <>
      <div className="about-header">        
        <p className="fadeInDown greyMedium experience">
          Creative, versatile, autonomous, analytical and hard-worker. 
          Multidisciplinary, technical-creative profile with a business approach. 
          Graduated in Advertising and Public Relations in the University of Barcelona
        </p>  
        <h1 className="fadeInLeft size7 grey">Cristina</h1>
        <h2 className="fadeInLeft size7 greyLight">Picatoste</h2> 
        <p className="fadeInUp greyMedium technologies">
          Piano and guitar player, Thai food lover and F1 fan. Interested in tech, innovation, cinema, philosophy and psicology.</p> 
      </div>
      <div className="about-square">
        <div className="square-image fadeInRight"></div>
        <h1 className="square-text greyLight size7 fadeInUpRotated">About Me</h1> 
      </div>
    </>
  )
}

export default About
