import React, { useEffect } from 'react'
import usePrivileges from '../../hooks/main-dashboard/usePrivileges'
import useLoader from '../../hooks/loader/useLoader'
import Menu from '../menu/Menu'
import Loader from '../loader/Loader'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link MainDashboard} method provides the user interface and functionality for displaying the
 * navigation menu and an area to dynamically load the different sections into
 * @param userDetails the logged in user details
 * @param setUserDetails a state setter which updates the logged in user details
 * @return {JSX.Element} the user interface which is parted into another component interface
 * @constructor
 */
const MainDashboard = ({
	userDetails, setUserDetails
}) => {
	/**
	 * @description the hook members exported by the {@link usePrivileges} hook
	 */
	const { privileges } = usePrivileges([], userDetails)
	/**
	 * @description the hook members exported by the {@link useLoader} hook
	 */
	const {
		showLoader, setShowLoader
	} = useLoader(true)

	useEffect(() => {
		const empty = 0
		if (privileges.length > empty) setShowLoader(false)
	}, [privileges, setShowLoader])

	return (
		<div className="w-100 h-100">
			{showLoader && <Loader />}
			<div className="d-flex justify-content-start">
				<div>
					{! showLoader && <Menu privileges={privileges} setUserDetails={setUserDetails} />}
				</div>
				<div>
					<h3>Dashboard</h3>
				</div>
			</div>
		</div>
	)
}

export default MainDashboard
