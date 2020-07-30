import React from 'react'

import '../../style/button.css'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link TableRow} method generates the user interface for rows in a table. The method takes an
 * array of data objects which need to be displayed and returns a visual table row node
 * @param tableHeaders the table headers
 * @param tableRow the table data to be displayed
 * @return {JSX.Element} the user interface for a table's rows
 * @constructor
 */
const TableRow = ({ tableHeaders, tableRow }) => (
	<tbody>
		{
			tableRow.map(row => (
				<tr key={row['Sales Number']}>
					{
						tableHeaders.map(column => {
							if (column !== 'Open') return (
								<td key={column} className="table-cell">
									{row[column]}
								</td>
							)

							return (
								<td key={`${row['Sales Number']}-btn`} className="table-cell">
									<button type="button" className="custom btn btn-info w-100">Open</button>
								</td>
							)
						})
					}
				</tr>
			))
		}
	</tbody>
)

export default TableRow
