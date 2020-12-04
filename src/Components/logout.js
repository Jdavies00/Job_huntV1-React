import React, { useEffect, useContext } from 'react';
import AppContext from '../utilities/AppContext';
import {Button} from "reactstrap"


function Logout() {
    const context = useContext(AppContext);
    function clickHandle(){
        localStorage.clear();
        context.setToken('');
        console.log("you are logged out")
    }
       
    return (
        <div>
            <Button onClick={clickHandle}>Logout</Button>
        </div>
    )
}

export default Logout
