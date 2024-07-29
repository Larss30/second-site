import React from 'react';
import images from '../../constants/images';

import './Skills.css';

const Skills = () => (
  <div className='app__aboutus app__bg flex__center section__padding flex__column' id='skills'>
    <h3 className='headtext__white__large'>Main Skills<img src={images.waves} alt='waves image' className='waves__img'/></h3>
    <div className='app__aboutus-skills__grid flex__center'>
      <div className='app__aboutus-skills__grid-skill__item'>
        <img src={images.wordpress} alt="skill__wordpress" className="wordpress__img skill__img wordpress__img" />
        <h5 className='headtext__white'>WordPress</h5>
      </div>
      <div className='app__aboutus-skills__grid-skill__item'>
        <img src={images.react} alt="skill__react" className="react__img skill__img react__img" />
        <h5 className='headtext__white'>ReactJS</h5>
      </div>
      <div className='app__aboutus-skills__grid-skill__item'>
        <img src={images.javascript} alt="skill__javascript" className="javascript__img skill__img javascript__img" />
        <h5 className='headtext__white'>JavaScript</h5>
      </div>
      <div className='app__aboutus-skills__grid-skill__item'>
        <img src={images.php} alt="skill__php" className="php__img skill__img php__img" />
        <h5 className='headtext__white'>PHP</h5>
      </div>
    </div>
  </div>
);

export default Skills;
