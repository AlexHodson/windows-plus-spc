import React, {useEffect, useRef, useState} from "react";
import {usePrivileges} from "../../hooks/main-dashboard/usePrivileges";
import {Menu} from "../menu/Menu";
import Loader from "../loader/Loader";
import {useLoader} from "../../hooks/loader/useLoader";

export default function MainDashboard({userDetails, setUserDetails}) {
    const {privileges} = usePrivileges([], userDetails)
    const {showLoader, setShowLoader} = useLoader(true)

    useEffect(() => {
        if (privileges.length > 0) {
            setShowLoader(false)
        }
    }, [privileges, setShowLoader])
    return (
        <div className="w-100 h-100">
            {/*<>
                {
                    showLoader &&
                    <>
                        <Loader ref={loader}/>
                    </>
                }
                {
                    !showLoader &&
                    <>
                        <Menu ref={menu} privileges={privileges} setLogin={setLogin}/>
                    </>
                }
                </>
                */
            }

            {showLoader && <Loader/>}
          {!showLoader && <Menu privileges={privileges} setLogin={setUserDetails}/>}

            <h3>Dashboard</h3>
        </div>
    );
}
