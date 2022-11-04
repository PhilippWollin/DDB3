import React from 'react'

export default function TaskBoard() {
    return (
        <div className='card--table'>
            <div class="table">
                <table cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th className="title-col">Titel</th>
                            <th className="author-col">Autor</th>
                            <th className="year-col">Entstehungsjahr</th>
                            <th className="language-col">Sprache</th>
                            <th className="publisher-col">Verlag</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    )
};