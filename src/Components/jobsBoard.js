import React, { useContext, useEffect } from 'react';
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'
import axios from "axios"
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    CardHeader, CardFooter
} from 'reactstrap';
import "../Components/Css/jobsBoard.css"


function JobsBoard() {
  
    const context = useContext(AppContext);
    const userData = () => {
        axiosHelper({
            method: 'get',
            token: context.token,
            route: "api/user"
        })
    }
    useEffect(() => {
        const headers = {
            Accept: "Application/Json",
            'Content-Type': 'application/json;charset=UTF-8',
        }
        axios({
            url: "http://localhost:8000/dashboard",
            method: "get",
            headers,
        })
            .then(res => {
                context.setJobs(res.data)
                console.log(res)
            })
            .catch(err => console.log('error: ', err))
    }, [context.length]);    
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
