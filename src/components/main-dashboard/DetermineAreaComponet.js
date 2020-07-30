import React from 'react'
import NewExternalFitArea from '../sales/external/fit/new/NewExternalFitArea'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link determineAreaComponent} determines which component should be rendered into the user
 * interface based on the given area
 * @param selectedArea the area to be rendered
 * @return {JSX.Element} the component to be added to the user interface
 */
const determineAreaComponent = selectedArea => {
	switch (selectedArea) {
		case 'ExternalSupplyFit':
			return <NewExternalFitArea />
		default:
			return <h3>Area Coming Soon</h3>
	}
}

export default determineAreaComponent
