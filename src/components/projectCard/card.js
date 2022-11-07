import React from 'react'
import rocket from "../../Img/rocket.webp"

export default function Card() {
    return (
        <div className="card">
            <img className="card--image" src={rocket} alt="a rocket lifting off"></img>
            <span className="card--name">Project name</span>
            <span className="card--result">75% done</span>
        </div>
    )
};