import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../utilities/AppContext';
import { Button } from "reactstrap"
import axiosHelper from '../utilities/axiosHelper';


function Logout() {
    const history = useHistory();
    const context = useContext(AppContext);

    // const handlefail = (e) => {
    //     console.log(e)
    // }

    const clickHandle = () => {
        history.push("/");
        localStorage.clear();
        // context.setUserInfo("")
        // context.setToken();
        console.log(context.token)
        // axiosHelper({
        //     method: "get",
        //     token: context.token,
        //     route: "logout",
        //     success: clearUserInfo,
        //     failure: handlefail

        // })


    }
    // const clearUserInfo = (res) => {
    //     context.setToken("")
    //     window.localStorage.clear("token");
    //     console.log(res)
    //     history.push("/");
    // }
    return (
        <Button style={{ backgroundColor: "#F2EFE9" }} onClick={clickHandle}>Logout</Button>
    )
}

export default Logout
