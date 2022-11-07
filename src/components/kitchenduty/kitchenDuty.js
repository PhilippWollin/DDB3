import React, { useState } from 'react'
import { getWeek } from 'date-fns'
import wollin from '../../Img/wollin.png'
import kitchen from '../../Img/chef.png'
import './kitchenDuty.css'

export default function KitchenDuty() {

    const [currentMonth] = useState(new Date());
    const [currentWeek] = useState(getWeek(currentMonth));

    return (
        <div className="kitchen--card">
            <img src={kitchen} className="kitchen--icon" alt='chefs hat and 2 spoons' />
            <span className="card--kitchenDuty">Küchendienst Kalenderwoche {currentWeek - 1}</span>
            <img src={wollin} className="attendence--img" alt='male employee' />
            <span className="card--kitchenDuty">Philipp</span>
            <img src={wollin} className="attendence--img" alt='male employee' />
            <span className="card--kitchenDuty">Vertretung: Philipp</span>
        </div>
    )
};