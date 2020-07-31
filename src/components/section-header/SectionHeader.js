import React from 'react'
import { FaSearch, FaSyncAlt } from 'react-icons/fa/index'

import '../../style/header.css'
import '../../style/form-control.css'
import '../../style/button.css'
import '../../style/icon.css'
import useHandleForm from '../../hooks/handle-form/useHandleForm'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link SectionHeader} method provides the user interface and functionality for the main sections
 * header display. The user interface contains a description of the area the user is viewing, a search entry node
 * and refresh button
 * @param heading the text to be displayed in the heading
 * @param handleRefresh a callback method which will handle the refreshing of data
 * @param handleFilter a callback method which will have the filtering of data
 * @return {JSX.Element} the user interface for the header display
 * @constructor
 */
const SectionHeader = ({ heading, handleRefresh, handleFilter }) => {
	/**
	 * @description the hook members exported by the {@link useHandleForm} hook
	 */
	const { handleChange } = useHandleForm()

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description calls the {@link handleChange} hook method when the user enters data in the search field
	 * @param event the element which triggered the event
	 */
	const searchTermEntered = event => {
		handleChange(event, handleFilter)
	}

	return (
		<div className="section-heading bg-blue d-flex justify-content-md-between align-items-center">
			<>
				<h3>{ heading }</h3>
			</>
			<div className="d-flex justify-content-md-end align-items-center">
				<div className="form-label-group mx-2">
					<input
						type="text"
						id="searchField"
						className="form-control"
						placeholder="Search"
						onChange={searchTermEntered}
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
					<button type="button" className="custom btn btn-sm btn-primary" onClick={handleRefresh}>
						<span>Refresh</span>
						<span className="button-icon">
							<FaSyncAlt />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SectionHeader
