import React, { useContext, useEffect } from 'react';
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'
// import Logout from "./logout"
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
    const saveJobData = (res) => {
        context.setJobs(res.data)
        console.log(res)
    }
    useEffect(() => {
        if (context.token.length > 0) {
            axiosHelper({
                method: 'get',
                token: context.token,
                route: "/myJobsBoard",
                success: saveJobData
            })
        }
    }, [context.token]);
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
                                            id={item.id}
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
