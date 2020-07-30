import React from 'react'
import Loader from '../../../../../components/loader/Loader'
import Table from '../../../../../components/table/Table'
import useLoader from '../../../../../hooks/loader/useLoader'
import useNewFitJobRetrieval from '../../../../../hooks/sales/fit/new/useNewFitJobRetrieval'
import FIT_TYPE from '../../../../../util/constants/FitType'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link NewExternalFitArea} method provides the functionality and user interface for the new
 * supply and fit area. The area provides the user a table which contains all new appointment
 * @return {JSX.Element}
 * @constructor
 */
const NewExternalFitArea = () => {
	/**
	 * @description the hook members exported by the {@link useLoader} hook
	 */
	const { showLoader } = useLoader(true)

	/**
	 * @description the hook members export by the {@link useNewFitJobRetrieval} hook
	 */
	const { tableHeaders, tableRows } = useNewFitJobRetrieval(FIT_TYPE.EXTERNAL)

	return (
		<>
			{ showLoader && <Loader /> }
			{! showLoader && (
				<>
					<h3>New External Supply Fit</h3>
					<>
						<Table tableHeaders={tableHeaders} tableRows={tableRows} />
					</>
				</>
			)}
		</>
	)
}

export default NewExternalFitArea
