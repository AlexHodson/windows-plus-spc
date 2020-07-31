import React from 'react'
import { WiStars } from 'react-icons/wi'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link EmptyTableDisplay} method provides the user interface for when a table has no data to display
 * @return {JSX.Element} the user interface to be displayed
 * @constructor
 */
const EmptyTableDisplay = () => (
	<div className="text-center">
		<div className="col-12 col-md-10 offset-md-1">
			<WiStars size="8em" color="gold" />
		</div>
		<div className="col-12 col-md-10 offset-md-1">
			<h3 className="display-4">We have no job&apos;s to show you</h3>
			<p className="lead">You are all caught up here!</p>
		</div>
	</div>
)

export default EmptyTableDisplay
