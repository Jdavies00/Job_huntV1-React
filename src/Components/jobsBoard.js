import React, { useContext, useEffect } from 'react';
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'
import {
    Card, CardBody,
    CardTitle, Button,
     CardFooter
} from 'reactstrap';
import "../Components/Css/jobsBoard.css"


function JobsBoard() {
  
    const context = useContext(AppContext);
    
    
    const saveJobData=(res)=>{
        context.setJobs(res.data)
        console.log(res)
        
    }
    useEffect(() => {
        axiosHelper({
            method: 'get',
            token: context.token,
            route: "allJobs",
            success: saveJobData
        })
        
    }, [context.token]);    
    return context.jobs

    ? context.jobs.map((item, idx) => {
        return (
          <>
            <Card key={idx} className="jobsBoard">
            {/* <CardHeader className="title">{item.CompanyName}</CardHeader> */}
              <CardTitle className="title">{item.CompanyName}</CardTitle>
              {/* <CardSubtitle>Posted By:{item."Created By"}</CardSubtitle> */}
              <CardBody className="body">{item.Description}</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </>
        );
      })
    : "";

}

export default JobsBoard
