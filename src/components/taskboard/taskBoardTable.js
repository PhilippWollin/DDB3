import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import Mock_Data from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'



export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Mock_Data, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <div className='card--table'>
            <div class="table">
                <table {...getTableProps()}>
                    <thead> {headerGroups.map((headerGroup) => (

                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (

                                    <th {...column.getHeaderProps()}>{
                                        column.render('Header')
                                    }</th>

                                ))
                            }
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


/*<th className="project-col">Projekt</th>
<th className="id-col">ID</th>
<th className="workItem-col">Work Item</th>
<th className="title-col">Titel</th>
<th className="prio-col">Prio</th>
<th className="state-col">State</th>*/