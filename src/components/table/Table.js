import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

import '../../style/table.css'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Table} method is a reusable component which builds a standardised table. The method takes
 * the table headers and table data which needs to be displayed and returns a visual table node
 * @param tableHeaders the table headers to be displayed
 * @param tableRows the table rows to be displayed
 * @return {JSX.Element} the user interface for the table which can be added to any other component
 * @constructor
 */
const Table = ({ tableHeaders, tableRows }) => (
	<div className="table-responsive">
		<table className="table table-bordered table-hover">
			<TableHeader tableHeaders={tableHeaders} />
			<TableRow tableHeaders={tableHeaders} tableRow={tableRows} />
		</table>
	</div>
)

export default Table
