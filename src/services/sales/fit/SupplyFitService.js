import FIT_TYPE from '../../../util/constants/FitType'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link retrieveNewJobs} method makes a GET request to the server which will retrieve the new fit
 * jobs for the logged in user and the given type
 * @param type the type of fit job
 * @param staffID the logged in staff members identifier
 * @return {Promise<Response>} a promise containing the new fit jobs
 */
const retrieveNewJobs = (type, staffID) => fetch(`
	http://localhost:4000/mainDashboard/privileges/${type}/${staffID}`, {
	'method': 'GET',
	'mode': 'cors',
	'headers': {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description verifies that the given job type is correct and calls for service to retrieve the new fit jobs
 * @param type the type of fit job to be retrieved
 * @param staffID the logged in staff members identifier
 * @return {Promise<Response>|null} a promise containing the new fit jobs, or null if the type is not valid
 */
const retrieveNewFitJobs = (type, staffID) => (
	type === FIT_TYPE.EXTERNAL || type === FIT_TYPE.INTERNAL ? retrieveNewJobs(type, staffID) : null
)

export default retrieveNewFitJobs
