import React, { Component } from "react";
import { MainDashboardService } from '../../services/main-dashboard/MainDashboardService'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link MainDashboard} class provides the functionality for the main user dashboard. It's main
 * functionality is to provide an area for the user to select different sections they have been authorised to used
 * and to provide an area to load their selected sections user interface into.
 * @see Component
 */
export default class MainDashboard extends Component {
    /**
     * @description class constructor which specifies any optional properties passed by other components
     * @param props the option properties to be set
     */
    constructor(props) {
        super(props)

        this.loadPrivileges()
    }

    /**
     * @description creates a new promise which will return a list of the logged in staff members account privileges
     */
    loadPrivileges = () => {
        new Promise((resolve, reject) => {
            const data = new MainDashboardService().retrievePrivileges(this.props.userDetails)

            resolve(data)
        })
            .then(response => response.json())
            .then(data => {})
    }

    render() {
        return (
            <div className="w-100">
                <h3>Dashboard</h3>
            </div>
        );
    }
}
