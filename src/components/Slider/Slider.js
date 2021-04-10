import React, { useEffect, useState } from 'react';
import { skills } from '../../data/skills';

import './Slider.scss';

export const Slider = () => {
  const [skill, setSkill] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (skill === 0) {
        setSkill(1);
      } if (skill === 1) {
        setSkill(2);
      } if (skill === 2) {
        setSkill(0)
      }
    }, 5000);
  }, [skill])

  return (
    <>
      <div className="header">
        <p className="fadeInOutDown size1 medweight greyMedium experience-slider">{skills[skill].experience}</p>
        <h1 className="fadeInOutLeft size5 grey">{skills[skill].position1}</h1>
        <h2 className="fadeInOutLeft size5 greyLight">{skills[skill].position2}</h2>
        <p className="fadeInOutUp size1 greyMedium technologies-slider">{skills[skill].technologies}</p>
      </div>
      <div className="square">
        <div className="square-image fadeInOutRight" style={{ backgroundImage: `url(${skills[skill].image})` }}></div>
        <h1 className="square-text greyLight size5 fadeInOutUpRotated">{skills[skill].calltoaction}</h1>
      </div>
    </>
  )
}

