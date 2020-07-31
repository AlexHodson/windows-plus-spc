import { useState } from 'react'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link useTableFilter} method provides the ability for filtering a table's dataset. The method
 * attempts to find the supplied search term in any of the specified columns to be searched. The results are then
 * set using the `setFileRows` member
 * @param tableColumns the table columns to be used in the filter
 * @param tableRows the table data to be filtered
 * @return {{setFilterRows: Dispatch<React.SetStateAction<*[]>>, filterTable: filterTable, filterRows: *[]}}
 */
const useTableFilter = (tableColumns, tableRows = []) => {
	const [filterRows, setFilterRows] = useState(tableRows)

	const filterTable = searchTerm => {
		const notExist = -1
		const data = tableRows.filter(element => {
			const exists = tableColumns.find(header => element[header].toString().indexOf(searchTerm) !== notExist)

			return typeof exists !== 'undefined'
		})
			.map(element => element)

		setFilterRows(data)
	}

	return { filterTable, filterRows, setFilterRows }
}

export default useTableFilter
