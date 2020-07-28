import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './../login/Login'
import MainDashboard from './../main-dashboard/MainDashboard'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Root} class provides the base area for the initial user interface. The main functionality
 * of the class is to switch between the log in page and the main user dashboard
 * @see Component
 */
export default class Root extends Component {
    /**
     * @description class constructor specifying the optional properties of the parent component
     * @param props the optional properties
     */
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        };

        this.onLoginAction = this.onLoginAction.bind(this);
    }

    userDetails = []

    /**
     * @description sets the value of the logged in staff member and the details of the logged in staff member
     * @param details the staff member details
     * @param loggedIn whether a staff member is logged in
     */
    onLoginAction = (details, loggedIn = true) => {
        console.log('HERE')
        this.userDetails = details
        this.setState({loggedIn: loggedIn});
    }

    render() {
        return (
            <Router>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            {this.state.loggedIn ? null : <Login onLoginAction={this.onLoginAction}/>}
                            {this.state.loggedIn ?
                                <MainDashboard userDetails={this.userDetails} onLoginAction={this.onLoginAction}/> :
                                null}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
