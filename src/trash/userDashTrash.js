// import React, { useContext, useEffect } from 'react';
// import axiosHelper from '../utilities/axiosHelper'
// import AppContext from '../utilities/AppContext'
// import Logout from "./logout"
// // import HomePage from './homePage';
// import axios from "axios"
// import {
//     Card, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';
// // import { data } from 'jquery';
// import "../Components/Css/userDashBoard.css";


// function UserDashBoard() {
//     // console.log ({data})
//     const context = useContext(AppContext);
//     const userData = () => {
//         axiosHelper({
//             method: 'get',
//             token: context.token,
//             route: "api/user"
//         })
//     }
    // const myjobs = () => {
    //     axiosHelper({
    //         method: 'get',
    //         token: context.token,

    //         route: "/dashboard",

    //     })
    //     .then((response) =>
    //     console.log(response),
    //     .then(response => (response))
    //     console.log(response)
    //     //  context.setJobs(response.data[0]), 
    //      (response) => console.log(response.data[0].CompanyName))
    // }

    // useEffect(() => {

    //     // const myjobs = () => {
    //     const headers = {
    //         Accept: "Application/Json",
    //         'Content-Type': 'application/json;charset=UTF-8',
    //     }
    //     axios({
    //         url: "http://localhost:8000/dashboard",
    //         method: "get",
    //         headers,
    //     })
    //         .then(res => {
    //             context.setJobs(res.data)
    //         })
    //         .catch(err => console.log('error: ', err))
    // }, [context.length]);
    // const allJobs = context.jobs;
    
    
    // return context.jobs
    // ? context.jobs.map((item, idx) => {
    //     return (
    //       <>
    //         <Card key={idx} className="userDashBoard">
    //           <CardTitle className="title">{item.CompanyName}</CardTitle>
    //           <CardSubtitle>Posted By:{item.Salary}</CardSubtitle>
    //           <CardBody className="body">{item.Description}</CardBody>
    //         </Card>
    //       </>
    //     );
    //   })
    // : "";
    // return allJobs ? allJobs.map((item, id) => {
    //     return (
    //         <>
    //             {console.log(item.CompanyName)}
    //             {/* <div className="userDashBoard"> */}
    //                 {/* <h2 className="text-center" onClick={userData}>My Jobs</h2>
    //             <Logout /> */}

    //                 {/* <h2 className="text-center" onClick={myjobs}>test</h2> */}
    //                 <Card key={id}className="userDashBoard">
    //                 {console.lo}
                    
    //                         <CardTitle tag="h5">{item.CompanyName}</CardTitle>
    //                         <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
    //                         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //                         <Button>Button</Button>
                      
    //                 </Card>
    //             {/* </div> */}
    //         </>
    //     )
    // })
    //     : console.log('Ryan sucks')




    // <div className="userDashBoard">
    //     <h2 className="text-center" onClick={userData}>My Jobs</h2>
    //     <Logout />

    //     <h2 className="text-center" onClick={myjobs}>test</h2>
    //     <Card>
    //         <CardBody>
    //             <CardTitle tag="h5">{data[0].CompanyName}</CardTitle>
    //             <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
    //             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //             <Button>Button</Button>
    //         </CardBody>
    //     </Card>
    // </div>




// }

// export default UserDashBoard
