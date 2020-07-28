import React, {Component} from "react";
import {MainDashboardService} from '../../services/main-dashboard/MainDashboardService'
import {Menu} from "../menu/Menu";
import Loader from "../loader/Loader";

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

        this.props = props

        this.props.onLoginAction()

        this.state = {loading: true}

        this.loadPrivileges()
    }

    privileges = []

    /**
     * @description creates a new promise which will return a list of the logged in staff members account privileges
     */
    loadPrivileges = () => {
        new Promise((resolve, reject) => {
            const data = new MainDashboardService().retrievePrivileges(this.props.userDetails)

            resolve(data)
        })
            .then(response => response.json())
            .then(data => {
                this.privileges = data
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div className="w-100 h-100">
                {
                    this.state.loading ? <Loader/> : <Menu privileges={this.privileges} onLoginAction={this.props.onLoginAction}/>
                }
                <h3>Dashboard</h3>
            </div>
        );
    }
}
