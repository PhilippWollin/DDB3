import React, { useEffect, useState } from 'react'

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 100);
    }, []);
    return <div className='nav--clock'>{clockState}</div>;
}

export default function Time() {
    return (
        <div className="card">
            <Clock />
        </div>
    )
};