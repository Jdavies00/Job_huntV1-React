import axios from 'axios';

//gen axios funt to call database info for pop table


function axiosHelper({
    method,
    route = "",
    data = {},
    success = r => console.log(r),
    failure = e => console.log(e),
    token = ""

}) {
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    const API_URL= "https://cors-anywhere.herokuapp.com/https://jobhunterv1.herokuapp.com/"
    // const API_URL = 'http://localhost:8000/'
    return axios({
        method,
        url: API_URL + route,
        data,
        headers,
    })
        .then(response => success(response))
        .catch(error => failure(error))
}

export default axiosHelper
