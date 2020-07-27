import React, {Component} from "react";
import { loginService } from '../../services/login/LoginService'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Login} class provides the functionality for allowing a user to log in. The class handles
 * initiates the retrieval of a staff members details based on the password they enter.
 *
 * The class renders a simple user interface which prompts the staff member to enter their code.
 *
 * @see Component
 */
export default class Login extends Component {
    /**
     * @description Class constructors which defines the state which is tied to the password field
     * @param props optional properties based from another component
     */
    constructor(props) {
        super(props)

        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * @description updates the state of the password field to be the value entered by the user
     * @param event the type event storing the user data
     */
    handleChange = event => { this.setState({value: event.target.value}); }

    /**
     * @description handles the event when the user clicks on the submit button. A new promise is created which will
     * return staff member details tied to the password entered
     * @param event the click event
     */
    handleSubmit = event => {
        new Promise((resolve, reject) => {
            const data = loginService(this.state.value)

            resolve(data)
        })
            .then(response => response.json())
            .then(data => {
                this.props.onLoginAction(data)
            })

        event.preventDefault();
    }

    render() {
        return (
            <div id="loginFormContainer">
                <form id="loginForm" className="d-flex justify-content-center align-items-center">
                    <div className="w-100">
                        <h3>Welcome to the Windows Plus SPC</h3>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                   onChange={this.handleChange}/>
                        </div>
                        <button onClick={this.handleSubmit} className="btn btn-primary btn-block">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
