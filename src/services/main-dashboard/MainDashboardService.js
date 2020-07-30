/**
 * @description makes a POST request to the server which will retrieve the logged in staff members account
 * privileges
 * @param userDetails the user details associated with the logged in user
 * @return {Promise<Response>} a promise containing the account privileges
 */
const retrievePrivileges = userDetails => fetch(`
	http://localhost:4000/mainDashboard/privileges/${userDetails[0].Username}`, {
	'method': 'GET',
	'mode': 'cors',
	'headers': {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})

export default retrievePrivileges
