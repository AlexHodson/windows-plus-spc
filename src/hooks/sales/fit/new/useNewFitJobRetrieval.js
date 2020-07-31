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

	/**
	 * @description the exported members from the {@link useDataGeneration} hook
	 */
	const { tableHeaders, tableRows, setTableRows, determineTableData } = useDataGeneration()

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description the {@link retrieveData} method makes an API call through the {@link retrieveNewFitJobs} method
	 * which retrieves all new fit jobs, of a given type, for the logged in user. Once the data has been retrieved.
	 * The table header and row data is generated using the {@link useDataGeneration} hook method,
	 * {@link determineTableData}.
	 */
	const retrieveData = () => {
		retrieveNewFitJobs(type, userDetails[0].StaffId)
			.then(response => response.json())
			.then(data => {
				determineTableData(data)
			})
	}

	useEffect(retrieveData, [])

	return { tableHeaders, tableRows, setTableRows, retrieveData }
}

export default useNewFitJobRetrieval
