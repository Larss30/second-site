import React from 'react'
import './article.css'

const Article = ({image, date, title, link}) => {
  return (
    <div className='gpt3_article' id={link}>
      <div className='gpt3_article-image'>
        <img src={image} alt={title}/>
      </div>
      <div className='gpt3_article-heading'>
        <p>{date}</p>
        <h4>{title}</h4>
      </div>
      <div className='gpt3_article-link'>
        <a href={link}>Read Full Article</a>
      </div>
    </div>
  )
}

export default Article