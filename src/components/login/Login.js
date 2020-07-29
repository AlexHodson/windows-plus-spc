import React from "react";
import { useHandleForm } from '../../hooks/handle-form/useHandleForm'
import {loginService} from "../../services/login/LoginService";

export default function Login({ setUserDetails }) {
    const afterSubmit = value => {
        new Promise((resolve, reject) => {
            const data = loginService(value)

            resolve(data)
        })
            .then(response => response.json())
            .then(data => {
                setUserDetails(data)
            })
    }

    const { value, handleChange, handleSubmit } = useHandleForm(null, afterSubmit)

    return (
        <div id="loginFormContainer">
            <form onSubmit={handleSubmit} id="loginForm" className="d-flex justify-content-center align-items-center">
                <div className="w-100">
                    <h3>Welcome to the Windows Plus SPC</h3>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" className="form-control" placeholder="Enter password"
                               onChange={handleChange}/>
                    </div>
                    <button className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
    );
}
