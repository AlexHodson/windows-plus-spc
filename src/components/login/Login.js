import React from 'react'
import useHandleForm from '../../hooks/handle-form/useHandleForm'
import loginService from '../../services/login/LoginService'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Login} method provides the functionality and user interface for allowing a user to log
 * into the system. The method provides a password input field for the user to input a password into and a submit
 * button which triggers the {@link loginService} which, in turn, retrieves any user details associated with the
 * user's code
 * @param setUserDetails a state setter which updates the logged in user details
 * @return {JSX.Element} the user interface which is ported into another component interface
 * @constructor
 */
export default function Login({ setUserDetails }) {
	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description creates a new promise which retrieves the user details associated with the code entered. If
	 * details are successfully retrieved, they are set using the {@link setUserDetails} method
	 * @param value the password entered by the user
	 */
	const afterSubmit = value => {
		new Promise(resolve => {
			const data = loginService(value)

			resolve(data)
		}).then(response => response.json())
		  .then(data => {
			  setUserDetails(data)
		  })
	}

	/**
	 * @description the hook members exported by the {@link useHandleForm} hook
	 */
	const { handleChange, handleSubmit } = useHandleForm(null, afterSubmit)

	return (
		<div id="loginFormContainer">
			<form onSubmit={handleSubmit} id="loginForm" className="d-flex justify-content-center align-items-center">
				<div className="w-100">
					<h3>Welcome to the Windows Plus SPC</h3>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							className="form-control"
							placeholder="Enter password"
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary btn-block">Submit</button>
				</div>
			</form>
		</div>
	)
}
