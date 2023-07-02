import './possibility.css'
import React from 'react'
import image from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3_possibilities section_padding' id='possibility'>
      <div className='gpt3_possibilities-image'>
        <img src={ image } alt='possibility'/>
      </div>
      <div className='gpt3_possibilities-content'>
        <a href='#link'>Request Early Access to Get Started</a>
        <h2 className='gradient_text'>The possibilities are beyond your imagination</h2>
        <p className='content'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='link'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility