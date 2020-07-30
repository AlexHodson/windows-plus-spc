import React from 'react'
import determineAreaComponent from '../../components/view-load/DetermineAreaComponet'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link AreaTemplate} loads the component area the user has selected from the navigation menu
 * into an empty div tag
 * @param selectedArea the area selected by the user from the navigation menu
 * @return {JSX.Element} the user interface to be added to the parent interface
 * @constructor
 */
const AreaTemplate = ({ selectedArea = 'Initial Load' }) => {
	/**
	 * @description the area component which will be rendered
	 */
	const area = determineAreaComponent(selectedArea)

	return (
		<>{ area }</>
	)
}
export default AreaTemplate
