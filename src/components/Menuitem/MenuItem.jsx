import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, subtext}) => (
  <div className='app__menuItem'>
    <div className='app__menuItem-title'>
      <h4 className='title headtext__cormorant'>{title}</h4>
      <div className='app__menuItem-title-sep'/>
      <h5 className='price headtext__cormorant'>{price}</h5>
    </div>
    <p className='p__paragraph_font subtext'>{subtext}</p>
    
  </div>
);

export default MenuItem;
