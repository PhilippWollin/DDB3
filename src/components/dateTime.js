import React from 'react'
import Time from './time'
import Date from './date'


export default function DateTime() {
    return (
        <div className="card--container">
            <Date />
            <Time />
        </div>
    )
};