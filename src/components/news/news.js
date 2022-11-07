import React from 'react'
import wollin from '../../Img/wollin.png'

export default function News() {

    return (
        <div className='news'>
            <img src={wollin} className="attendence--img" alt='male employee' />
            <span className="attendence--name">Philipp Wollin</span>
            <span className="attendence--name">News sind tolle news</span>
        </div>
    )
};