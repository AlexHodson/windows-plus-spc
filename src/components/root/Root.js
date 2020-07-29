import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './../login/Login'
import MainDashboard from './../main-dashboard/MainDashboard'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Root} class provides the base area for the initial user interface. The main functionality
 * of the class is to switch between the log in page and the main user dashboard
 */
export default function Root() {
    const [userDetails, setUserDetails] = useState([])
    console.log(userDetails)

    return (
        <Router>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Switch>
                        {userDetails.length === 0 && <Login setUserDetails={setUserDetails} />}
                        {userDetails.length > 0 && <MainDashboard userDetails={userDetails} setUserDetails={setUserDetails}/> }
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
