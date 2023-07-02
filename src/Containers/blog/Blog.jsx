import React from 'react'
import './blog.css'
import { Article } from '../../Components'
import { blog1Image, blog2Image, blog3Image, blog4Image } from './imports'

const Blog = () => {

  const articleData = [
    {
      articleImage: blog1Image,
      articleDate: "Sep 26, 2021",
      articleTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?", 
      articleLink: "#link1"
    }
  ]
  const popularArticles = [
    {
      articleImage: blog1Image,
      articleDate: "Sep 27, 2021",
      articleTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?", 
      articleLink: "#popular1"
    },
    {
      articleImage: blog2Image,
      articleDate: "Sep 28, 2021",
      articleTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?", 
      articleLink: "#popular2"
    },
    {
      articleImage: blog3Image,
      articleDate: "Sep 29, 2021",
      articleTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?", 
      articleLink: "#popular3"
    },
    {
      articleImage: blog4Image,
      articleDate: "Sep 30, 2021",
      articleTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?", 
      articleLink: "#popular4"
    },
  ]

  return (
    <div className='gpt3_blog section_padding' id='blog'>
      <h3 className='gradient_text'>A lot is happening, We are blogging about it.</h3>
      <div className='gpt3_blog-content'>
        <div className='gpt3_blog-content-groupA'>
        {articleData.map((item, index) => 
          <Article image = {item.articleImage} date = {item.articleDate} title = {item.articleTitle} link = {item.articleLink} key = {item.articleTitle + index}/>
        )}
        </div>
        <div className='gpt3_blog-content-groupB'>
        {popularArticles.map((item, index) => 
          <Article image = {item.articleImage} date = {item.articleDate} title = {item.articleTitle} link = {item.articleLink} key = {item.articleTitle + index}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default Blog