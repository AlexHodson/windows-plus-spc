import React, { useState } from 'react'
import {
	BrowserRouter as Router, Switch
} from 'react-router-dom'

import Login from '../login/Login'
import MainDashboard from '../main-dashboard/MainDashboard'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Root} method provides the base area for the initial user interface. The main functionality
 * of the method is to switch between the log in page and the main user dashboard
 */
export default function Root() {
	/**
	 * @description the user details state member and a setter method
	 */
	const [userDetails, setUserDetails] = useState([])

	/**
	 * @description a number which will be used when checking if something is empty
	 * @type {number}
	 */
	const empty = 0

	return (
		<Router>
			<div className="auth-wrapper">
				<div className="auth-inner">
					<Switch>
						{userDetails.length === empty && <Login setUserDetails={setUserDetails} />}
						{userDetails.length > empty &&
						<MainDashboard userDetails={userDetails} setUserDetails={setUserDetails} />}
					</Switch>
				</div>
			</div>
		</Router>
	)
}
