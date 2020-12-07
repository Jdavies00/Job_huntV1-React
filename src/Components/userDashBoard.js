import React, { useContext, useEffect } from 'react';
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'
// import Logout from "./logout"
import axios from "axios"
import Delete from './deleteButton'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Container, Row, Col,
    // CardHeader, 
    CardFooter
} from 'reactstrap';
// import { data } from 'jquery';
import "../Components/Css/userDashBoard.css";


function UserDashBoard() {
    // console.log ({data})
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
                context.setJobID(res.data.id)
                console.log(res.data.id)
            })
            .catch(err => console.log('error: ', err))
    }, [context.length]);
    return context.jobs
        ? context.jobs.map((item, id) => {
            return (
                <>
                    <Container >
                        <Row className="mt-3 mb-3">
                            <Col>
                                <Card key={id} className="Card ">
                                    {/* <CardHeader className="title">{item.CompanyName}</CardHeader> */}
                                    <CardTitle className="CardTitle">{item.CompanyName}</CardTitle>
                                    <CardSubtitle>Salary $:{item.Salary}</CardSubtitle>
                                    <CardBody className="CardBody">{item.Description}</CardBody>
                                    <CardFooter className="CardFooter">
                                    <Button>Save</Button>
                                    <Delete 
                                        id = {item.id}
                                    />
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        })
        : "";

}

export default UserDashBoard
