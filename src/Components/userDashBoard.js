import React, { useContext } from 'react';
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'
import Logout from "./logout"
function UserDashBoard() {
    const context = useContext(AppContext);
    const userData = () => {

        axiosHelper({ method: 'get', token: context.token, route: "api/user" })
    }
    // const myjobs =  () => {

    //     axiosHelper({ method: 'get', , route: "" })
    // }
   
    
  
    return (
        <div>
            <h2 className="text-center" onClick={userData}>My Jobs</h2>
        <Logout />
        </div>
    )
}

export default UserDashBoard
