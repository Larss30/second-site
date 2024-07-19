import React from 'react';
import images from '../../constants/images'

const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.waves} alt='waves image' className='waves__img'/>
  </div>
);

export default SubHeading;
