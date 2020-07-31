import React from 'react'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link TableHeader} method generates the user interface for header nodes in a table. The method
 * takes an array of table headers which need to be displayed and returns a visual table header node
 * @param tableHeaders the table headers to be displayed
 * @return {JSX.Element} the user interface for a table's header
 * @constructor
 */
const TableHeader = ({ tableHeaders }) => {
	/**
	 * An array containing the table head cells which will be rendered in the user interface
	 */
	const headers = tableHeaders.map(link => (
		<th key={link}>
			{link}
		</th>
	))

	return (
		<thead className="thead thead-blue">
			<tr>
				{headers}
			</tr>
		</thead>
	)
}

export default TableHeader
