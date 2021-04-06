import React from 'react';
import './Slider.scss'

export const Slider = () => {
  return (
    <>
      <div className="header">        
        <p className="fadeInRight greyMedium">Cristina Picatoste</p>
        <h1 className="fadeInLeft size7 grey">MERN</h1>
        <h2 className="fadeInLeft size7 greyLight">Stack Developer</h2>
        <p className="fadeInUp greyMedium">MongoDB, Express, React & Node</p>
      </div>
      <div className="square">
        <div className="square-image fadeInRight">
        </div>
        <h1 className="square-text greyLight size7 fadeInUpRotated">Portfolio</h1>
      </div>
    </>
  )
}
