import React, {Component} from "react";
import { connectToService } from '../../services/SQLService'

export default class Login extends Component {
    render() {
        return (
            <div id="loginFormContainer">
                <form id="loginForm" className="d-flex justify-content-center align-items-center">
                    <div className="w-100">
                        <h3>Welcome to the login page</h3>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"/>
                        </div>
                        <button onClick={connectToService} className="btn btn-primary btn-block">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
