import React from 'react'
import { FaSearch, FaSyncAlt } from 'react-icons/fa/index'

import '../../style/header.css'
import '../../style/form-control.css'
import '../../style/button.css'
import '../../style/icon.css'

const sectionHeader = ({ heading, handleRefresh }) => (
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

export default sectionHeader
