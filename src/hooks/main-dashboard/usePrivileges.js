import React, {useState, useEffect} from "react";
import {MainDashboardService} from "../../services/main-dashboard/MainDashboardService";

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link usePrivileges} hook provides the functionality for retrieving and storing the logged in
 * user's area privileges
 * @param initialPrivilegeState the initial privilege state
 * @param userDetails the logged in user details
 * @return {{privileges: unknown}}
 */
export function usePrivileges(initialPrivilegeState, userDetails) {
    /**
     * @description the privileges state member and setter method
     */
    const [privileges, setPrivileges] = useState(initialPrivilegeState)

    useEffect(() => {
        new MainDashboardService().retrievePrivileges(userDetails)
            .then(response => response.json())
            .then(data => {
                setPrivileges(data)
            })
    },[])

    return {privileges}
}
