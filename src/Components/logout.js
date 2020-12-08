import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../utilities/AppContext';
import { Button } from "reactstrap"
import axiosHelper from '../utilities/axiosHelper';


function Logout() {
    const history = useHistory();
    const context = useContext(AppContext);
    const clearUserInfo= (res)=>{
        context.setUserinfo('')
        context.setToken ('')
        console.log(context.token)

    }

    const clickHandle = () => {
        localStorage.clear();
        console.log("you are logged out");
        history.push("/");

        axiosHelper({
            method: "get",
            token: context.token,
            route: "/logout",
            success: clearUserInfo

        })
    }

    // function logOut() {
    //     axiosHelper({
    //         route: "/logout",
    //         method: "get",

    //     })
    //         .then(console.log("YEEET"), 
    //         history.push('/'),
    //          setToken(''), 
    //         //  setUserInfo(''
    //         )
    //         .catch(err => console.log('error: ', err))

    return (
        <div>
            <Button onClick={clickHandle}>Logout</Button>
        </div>
    )
}

export default Logout

