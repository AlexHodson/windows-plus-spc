import React from 'react'
import './loader.css'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Loader} method provides the user interface for the loading spinner
 * @return {JSX.Element} the user interface which is ported into another component interface
 * @constructor
 */
const Loader = () => (
	<div className="d-flex flex-row w-100 h-100 justify-content-center align-items-center">
		<div id="loaderContainer">
			<div id="sc1" />
			<div id="sc2" />
			<div id="sc3" />
			<div id="sc4" />
			<div id="sc5" />
		</div>
	</div>
)

export default Loader
