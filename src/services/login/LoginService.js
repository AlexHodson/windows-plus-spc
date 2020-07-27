/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description exports the loginService method which posts the password entered by the user to the server to
 * retrieve the staff details belonging to the code
 * @param password the password entered by the user
 * @return {Promise<Response>} a promise containing the staff data
 */
export const loginService = password => {
    return fetch('http://localhost:4000/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password: password})
    })
}
