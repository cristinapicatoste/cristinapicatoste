import React from 'react';
import './About.scss';

const About = () => {
  return (
    <>
      <div className="about-header">
        <p className="fadeInDown size1 medweight greyMedium experience">
          Creative, versatile, autonomous, analytical and hard-worker.
          Multidisciplinary, technical-creative profile with a business approach
          </p>
        {/* <p className="fadeInDown greyMedium experience">
          Graduated in Advertising and Public Relations
          <br />
          Master in Marketing Management
          <br />
          Master in Full Stack Developer
        </p> */}
        {/* <p className="fadeInDown greyMedium experience">Master in Full Stack Developer & Master in Digital Marketing & Marketing Management.</p> */}
        <h1 className="fadeInLeft size5 grey">Cristina</h1>
        <h2 className="fadeInLeft size5 greyLight">Picatoste</h2>
        <p className="fadeInUp size1 greyMedium technologies">
          Piano and guitar player, Thai food lover and F1 fan.
          <br />
          Interested in tech, innovation, cinema, philosophy and psicology.</p>
      </div>
      <div className="about-square">
        <div className="square-image fadeInRight"></div>
        <h1 className="square-text greyLight size5 fadeInUpRotated">About Me</h1>
      </div>
    </>
  )
}

export default About
