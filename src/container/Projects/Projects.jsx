import React from 'react';
import { images } from '../../constants';
import './Projects.css';

const Projects = () => (
  <div className='app__aboutus app__bg flex__center section__padding flex__column' id='projects'>
  <h3 className='headtext__white__large'>Projects<img src={images.waves} alt='waves image' className='waves__img'/></h3>
   <div className='app__aboutus-projects flex__center'>
      <div className='app__aboutus-projects__grid-project__item'>
        <a target='_blank' href={images.ais_national} className='flex__center'> <img src={images.ais_national_preview} alt="project__ais_national" className="ais_national_preview__img preview__img wordpress__img" /></a>
        <h5 className='headtext__white'>AIS National</h5>
      
      </div>
      <div className='app__aboutus-projects__grid-project__item'>
        <a target='_blank' href={images.ais_national} className='flex__center'> <img src={images.ais_elevate_preview} alt="project__ais_elevate" className="ais_national_preview__img preview__img wordpress__img" /></a>
        <h5 className='headtext__white'>AIS Elevate</h5>
      </div>
      <div className='app__aboutus-projects__grid-project__item'>
        <a target='_blank' href="https://larence-wms-app.netlify.app/" className='flex__center'style={{gap:'1em'}}> <img src={images.wms_prot2} alt="tool__wordpress" className="ais_national_preview__img preview__img wordpress__img" /> <img src={images.wms_prot1} alt="tool__wordpress" className="ais_national_preview__img preview__img wordpress__img" /></a>
        <h5 className='headtext__white'>WMS App Prototype</h5>
      </div>
    </div>
  </div>
);

export default Projects;
