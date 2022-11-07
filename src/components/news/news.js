import React from 'react'
import wollin from '../../Img/wollin.png'
import './news.css'

export default function News() {

    return (
        <div className='news--card'>
            <img src={wollin} className="news--sender--img" alt='male employee' />
            <span className="news--name">15:14     Philipp Wollin -</span>
            <span className="news--name"> ---  News sind tolle news</span>
        </div>
    )
};