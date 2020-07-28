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
     * @description sets the value of the logged in state member
     */
    onLoginAction = details => {
        this.userDetails = details
        this.setState({loggedIn: true});
    }

    render() {
        return (
            <Router>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            {this.state.loggedIn ? null : <Login onLoginAction={this.onLoginAction}/>}
                            {this.state.loggedIn ? <MainDashboard userDetails={this.userDetails}/> : null}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
