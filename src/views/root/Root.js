import React, { useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../login/Login'
import MainDashboard from '../main-dashboard/MainDashboard'

import { Provider } from '../../hooks/context/userDetalisContext'
/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Root} method provides the base area for the initial user interface. The main functionality
 * of the method is to switch between the log in page and the main user dashboard
 */
export default function Root() {
	/**
	 * @description a number which will be used when checking if something is empty
	 * @type {number}
	 */
	const empty = 0
	/**
	 * @description a state member which stores the user details of the logged in user
	 */
	const [userDetails, setUserDetails] = useState([])

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description sets the user details in the state member
	 * @param data the data to be set
	 */
	const setDetails = data => {
		setUserDetails(data)
	}

	return (
		<Router>
			<div className="auth-wrapper">
				<div className="auth-inner">
					<Switch>
						{userDetails.length === empty && <Login setUserDetails={setDetails} />}
						{userDetails.length > empty && (
							<Provider value={userDetails}>
								<MainDashboard userDetails={userDetails} setDetails={setDetails} />
							</Provider>
						)}
					</Switch>
				</div>
			</div>
		</Router>
	)
}
