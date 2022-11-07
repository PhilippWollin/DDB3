import React, { useEffect, useState } from 'react'

export default function Today() {

    const [dateState, setDateState] = useState();

    useEffect(() => {
        setDateState(new Date()) 
    }, [])
    


    return (
        <div className="card">

            <span className="card--result">
                {dateState?.toString()}
                </span>

        </div>
    )
};