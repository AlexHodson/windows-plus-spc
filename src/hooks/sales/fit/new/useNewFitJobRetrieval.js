import { useContext, useEffect, useState } from 'react'
import retrieveNewFitJobs from '../../../../services/sales/fit/SupplyFitService'
import { Context } from '../../../context/userDetalisContext'

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
	 * @description the hook members which store the table headers and a method for updating them
	 */
	const [tableHeaders, setTableHeaders] = useState([])
	/**
	 * @description the hook members which store the table rows and a method for updating them
	 */
	const [tableRows, setTableRows] = useState([])

	useEffect(() => {
		retrieveNewFitJobs(type, userDetails.StaffId)
			.then(response => response.json())
			.then(data => {
				setTableHeaders(data)
				setTableRows(data)
			})
	})

	return { tableHeaders, tableRows }
}

export default useNewFitJobRetrieval
