import React, { useContext, useEffect } from 'react';
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Container, Row, Col,
    CardFooter
} from 'reactstrap';
import "../Components/Css/jobsBoard.css"


function JobsBoard() {

    const context = useContext(AppContext);


    const saveJobData = (res) => {
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

    }, [context.token,]);
    return context.jobs

        ? context.jobs.map((item, id) => {
            return (
                <div style={{ background: "#E7E7E9" }}>
                    <Container>
                        <Row>
                            <Col>
                                <Card key={id} className="Card ">
                                    {/* <CardHeader className="title">{item.CompanyName}</CardHeader> */}
                                    <CardTitle className="CardTitle" style={{ background: "#8DB38B" }}>{item.CompanyName}</CardTitle>
                                    <CardSubtitle>Salary $:{item.Salary}</CardSubtitle>
                                    <CardBody className="CardBody">{item.Description}</CardBody>
                                    <CardFooter className="CardFooter mb-4">
                                        {/* <Button>Save</Button> */}
                                        {/* <Button onClick={clickHandle}>Delete</Button> */}
                                        {/* 
                                        <Delete
                                            id={item.id}
                                        /> */}
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </div>
            );
        })
        : "";

}

export default JobsBoard
