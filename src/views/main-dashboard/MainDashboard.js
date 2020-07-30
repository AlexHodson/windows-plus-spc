import React, { useEffect, useState } from 'react'
import useLoader from '../../hooks/loader/useLoader'
import usePrivileges from '../../hooks/main-dashboard/usePrivileges'
import Loader from '../../components/loader/Loader'
import Menu from '../../components/menu/Menu'
import AreaTemplate from './AreaTemplate'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link MainDashboard} method provides the user interface and functionality for displaying the
 * navigation menu and an area to dynamically load the different sections into
 * @param userDetails the logged in user details
 * @param setUserDetails a state setter which updates the logged in user details
 * @return {JSX.Element} the user interface which is parted into another component interface
 * @constructor
 */
const MainDashboard = ({ userDetails, setUserDetails }) => {
	/**
	 * @description the hook members exported by the {@link usePrivileges} hook
	 */
	const { privileges } = usePrivileges([], userDetails)
	/**
	 * @description the hook members exported by the {@link useLoader} hook
	 */
	const { showLoader, setShowLoader } = useLoader(true)

	const [selectedArea, setSelectedArea] = useState('Initial Load')

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description loads an area, which is linked to the given string target, into the main dashboard template
	 * @param target the section selected by the user to be loaded
	 */
	const loadArea = target => {
		setSelectedArea(target)
	}

	useEffect(() => {
		const empty = 0

		if (privileges.length > empty) setShowLoader(false)
	}, [privileges, setShowLoader])

	return (
		<div className="w-100 h-100">
			{showLoader && <Loader />}
			<div className="d-flex justify-content-start">
				<div>
					{! showLoader &&
					<Menu privileges={privileges} setUserDetails={setUserDetails} loadArea={loadArea} />}
				</div>
				<div className="w-100 px-3">
					<AreaTemplate selectedArea={selectedArea} />
				</div>
			</div>
		</div>
	)
}

export default MainDashboard
