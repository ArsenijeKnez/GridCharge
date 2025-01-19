import React from 'react'
import './Article.css';
const Article = ({ imgurl, date, title }) => {
    return (
        <div className='gridcharge__blog-container_article'>
            <div className='gridcharge__blog-container_article-image'>
                <img src={imgurl} alt='blog' />
            </div>
            <div className='gridcharge__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article
