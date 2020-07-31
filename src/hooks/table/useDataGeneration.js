import { useState } from 'react'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link useDataGeneration} methods provides the functionality for generating the table data and
 * header values from a dataset which was retrieved using the API
 * @return {{tableHeaders: *[], determineTableData: determineTableData, tableRows: *[]}}
 */
const useDataGeneration = () => {
	/**
	 * @description the hook members which store the table headers and a method for updating them
	 */
	const [tableHeaders, setTableHeaders] = useState([])
	/**
	 * @description the hook members which store the table rows and a method for updating them
	 */
	const [tableRows, setTableRows] = useState([])

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description identifies the header values and table row values using the data given
	 * @param data the data retrieved from the database
	 */
	const determineTableData = data => {
		const empty = 0
		const rows = []

		data.forEach(row => {
			if (tableHeaders.length === empty) {
				const headers = Object.keys(row)
				headers.push('Open')
				setTableHeaders(headers)
			}

			rows.push(row)
		})

		setTableRows(rows)
	}

	return { tableHeaders, tableRows, setTableRows, determineTableData }
}

export default useDataGeneration
