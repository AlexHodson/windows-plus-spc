/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link MainDashboardService} class provides the service methods which interact with the data
 * layer API
 */
export class MainDashboardService {
    /**
     * @description makes a POST request to the server which will retrieve the logged in staff members account
     * privileges
     * @param userDetails the user details associated with the logged in user
     * @return {Promise<Response>} a promise containing the account privileges
     */
    retrievePrivileges = userDetails => {
        return fetch('http://localhost:4000/dashboard/privileges', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ staffID: userDetails.staffID })
        })
    }
}
