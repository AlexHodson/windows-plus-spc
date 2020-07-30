import { useEffect, useState } from 'react'
import retrievePrivileges from '../../services/main-dashboard/MainDashboardService'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link usePrivileges} hook provides the functionality for retrieving and storing the logged in
 * user's area privileges
 * @param initialPrivilegeState the initial privilege state
 * @param userDetails the logged in user details
 * @return {{privileges: unknown}}
 */
const usePrivileges = (initialPrivilegeState, userDetails) => {
	/**
	 * @description the privileges state member and setter method
	 */
	const [privileges, setPrivileges] = useState(initialPrivilegeState)

	useEffect(() => {
		retrievePrivileges(userDetails)
			.then(response => response.json())
			.then(data => {
				setPrivileges(data)
			})
	}, [userDetails])

	return { privileges }
}

export default usePrivileges
