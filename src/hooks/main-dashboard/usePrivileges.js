import React, {useState, useEffect} from "react";
import {MainDashboardService} from "../../services/main-dashboard/MainDashboardService";

export const usePrivileges = (initialPrivilegeState, userDetails) => {
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
