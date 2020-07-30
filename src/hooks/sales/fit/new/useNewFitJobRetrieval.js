import { useContext, useEffect } from 'react'
import retrieveNewFitJobs from '../../../../services/sales/fit/SupplyFitService'
import { Context } from '../../../context/userDetalisContext'
import useDataGeneration from '../../../table/useDataGeneration'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link useNewFitJobRetrieval} method provides the access for retrieving the new fit jobs
 * associated with the logged in staff member
 * @param type the fit type to be retrieved
 * @return {{tableHeaders: *[], tableRows: *[]}}
 * @constructor
 */
const useNewFitJobRetrieval = type => {
	/**
	 * @description the context member which contains the user details
	 * @type {(function(...[*]=))[]}
	 */
	const user = useContext(Context)
	/**
	 * @description the details of the logged in user
	 */
	const { userDetails } = user

	const { tableHeaders, tableRows, determineTableData } = useDataGeneration()

	useEffect(() => {
		retrieveNewFitJobs(type, userDetails[0].StaffId)
			.then(response => response.json())
			.then(data => {
				determineTableData(data)
			})
	}, [type, userDetails])

	return { tableHeaders, tableRows }
}

export default useNewFitJobRetrieval
