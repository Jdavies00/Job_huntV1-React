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

// public function logout(Request $request)
//     {
//         $request->user()->token()->revoke();
//         $request->user()->token()->delete();
//         $response = 'you have been successfully logged out!';
//         return response($response, 200);
//     }
//     const logout = () => {
//         const url = "http://localhost:8000/logout";
//         const method = "get";
//         const headers = {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${context.bearer}`,
//         };
//         axios({
//           url,
//           method,
//           headers,
//         })
//           .then(() => context.setLogin(false))
//           .catch((err) => console.log("error: ", err));
//       };