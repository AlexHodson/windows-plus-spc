import React, { useEffect, useState } from 'react'

import Loader from '../../../../../components/loader/Loader'
import SectionHeader from '../../../../../components/section-header/SectionHeader'
import Table from '../../../../../components/table/Table'
import useLoader from '../../../../../hooks/loader/useLoader'
import useNewFitJobRetrieval from '../../../../../hooks/sales/fit/new/useNewFitJobRetrieval'
import useTableFilter from '../../../../../hooks/table/useTableFilter'
import FIT_TYPE from '../../../../../util/constants/FitType'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link NewExternalFitArea} method provides the functionality and user interface for the new
 * supply and fit area. The area provides the user a table which contains all new appointment
 * @return {JSX.Element}
 * @constructor
 */
const NewExternalFitArea = () => {
	const [initialLoad, setInitialLoad] = useState(true)
	/**
	 * @description the hook members exported by the {@link useLoader} hook
	 */
	const { showLoader, setShowLoader } = useLoader(true)
	/**
	 * @description the hook members exported by the {@link useNewFitJobRetrieval} hook
	 */
	const { tableHeaders, tableRows, retrieveData } = useNewFitJobRetrieval(FIT_TYPE.EXTERNAL)
	/**
	 * @description the hook members exported by the {@link useTableFilter} hook
	 */
	const { filterTable, filterRows, setFilterRows } = useTableFilter(['Sales Number'], tableRows)

	useEffect(() => {
		const empty = 0

		if (tableHeaders.length > empty) {
			setShowLoader(false)

			if (tableRows.length !== empty && initialLoad) {
				setFilterRows(tableRows)
				setInitialLoad(false)
			}
		}
	}, [tableHeaders, setShowLoader, tableRows, initialLoad, setFilterRows, setInitialLoad])

	return (
		<>
			{ showLoader && <Loader /> }
			{!showLoader && (
				<>
					<>
						<SectionHeader
							heading="External Supply Fit Jobs"
							handleRefresh={retrieveData}
							handleFilter={filterTable}
						/>
					</>
					<>
						<h4>New Jobs</h4>
						<Table tableHeaders={tableHeaders} tableRows={filterRows} />
					</>
				</>
			)}
		</>
	)
}

export default NewExternalFitArea
