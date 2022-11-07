import React from 'react'
import wollin from '../../Img/wollin.png'

export default function Attendances() {

    return (
        <div className='attendence'>
            <img src={wollin} className="attendence--img" alt='male employee' />
            <span className="attendence--name">Philipp Wollin</span>
        </div>
    )
};