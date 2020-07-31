import React, { useEffect } from 'react'
import { FaSearch, FaSyncAlt } from 'react-icons/fa'

import Loader from '../../../../../components/loader/Loader'
import Table from '../../../../../components/table/Table'
import useLoader from '../../../../../hooks/loader/useLoader'
import useNewFitJobRetrieval from '../../../../../hooks/sales/fit/new/useNewFitJobRetrieval'
import FIT_TYPE from '../../../../../util/constants/FitType'

import '../../../../../style/header.css'
import '../../../../../style/form-control.css'
import '../../../../../style/button.css'
import '../../../../../style/icon.css'

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
	const { showLoader, setShowLoader } = useLoader(true)

	/**
	 * @description the hook members export by the {@link useNewFitJobRetrieval} hook
	 */
	const { tableHeaders, tableRows } = useNewFitJobRetrieval(FIT_TYPE.EXTERNAL)

	useEffect(() => {
		const empty = 0

		if (tableHeaders.length > empty) setShowLoader(false)
	})
	return (
		<>
			{ showLoader && <Loader /> }
			{! showLoader && (
				<>
					<div className="section-heading bg-blue d-flex justify-content-md-between align-items-center">
						<>
							<h3>External Supply Fit Jobs</h3>
						</>
						<div className="d-flex justify-content-md-end align-items-center">
							<div className="form-label-group mx-2">
								<input
									type="text"
									id="searchField"
									className="form-control"
									placeholder="Email address"
									required
								/>
								<label htmlFor="searchField">
									Search
									<div className="control-icon">
										<FaSearch />
									</div>
								</label>
							</div>
							<div className="form-label-group mx-2">
								<button type="button" className="custom btn btn-sm btn-primary">
									<span>Refresh</span>
									<span className="button-icon">
										<FaSyncAlt />
									</span>
								</button>
							</div>
						</div>
					</div>
					<>
						<h4>New Jobs</h4>
						<Table tableHeaders={tableHeaders} tableRows={tableRows} />
					</>
				</>
			)}
		</>
	)
}

export default NewExternalFitArea
