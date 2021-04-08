import React, { useEffect, useState } from 'react';
import { skills } from '../../data/skills';

import './Slider.scss';

export const Slider = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [skill, setSkill] = useState(0);

  useEffect(() => {
    // skills.map((s, i) => {      
    //   setTimeout(() => {
    //     setFadeOut(!fadeOut);
    //     // setSkill(i);
    //   }, 3000);
    // })

    setInterval(() => {
      setFadeOut(!fadeOut);
      setFadeOut(!fadeOut);
      setTimeout(() => {
        setSkill(1)
      }, 2000);
    }, 3000);
  }, [skill, fadeOut])


  return (
    <>
      <div className="header">        
        {/* <p className="fadeInRight greyMedium experience">{skills[skill].experience}</p>  */}
        <p className={`${fadeOut ? 'fadeOutRight' : 'fadeInRight'} greyMedium experience`}>{skills[skill].experience}</p> 
        {/* <h1 className="fadeInLeft size7 grey">{skills[1].position1}</h1>  */}
        <h1 className={`${fadeOut ? 'fadeOutLeft' : 'fadeInLeft'} size7 grey`}>{skills[skill].position1}</h1> 
        {/* <h2 className="fadeInLeft size7 greyLight">{skills[skill].position2}</h2>  */}
        <h2 className={`${fadeOut ? 'fadeOutLeft' : 'fadeInLeft'} size7 greyLight`}>{skills[skill].position2}</h2> 
        {/* <p className="fadeInUp greyMedium technologies">{skills[skill].technologies}</p>  */}
        <p className={`${fadeOut ? 'fadeOutUp' : 'fadeInUp'} greyMedium technologies`}>{skills[skill].technologies}</p> 
      </div>
      <div className="square">
        {/* <div className="square-image fadeInRight"> */}
        <div className={`${fadeOut ? 'fadeOutRight' : 'fadeInRight'} square-image`}>
        </div>
        {/* <h1 className="square-text greyLight size7 fadeInUpRotated">{skills[skill].calltoaction}</h1>  */}
        <h1 className={`${fadeOut ? 'fadeOutDownRotated' : 'fadeInUpRotated'} square-text greyLight size7`}>{skills[skill].calltoaction}</h1> 
      </div>
    </>
  )
}
