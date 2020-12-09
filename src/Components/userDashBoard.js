import React, { useContext, useEffect } from 'react';
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'
import Delete from './deleteButton'
import "./Css/homepage.css"
import {
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Container, Row, Col,
    CardFooter,
    
} from 'reactstrap';
import "../Components/Css/userDashBoard.css";


function UserDashBoard() {
    const context = useContext(AppContext);

    const saveJobData = (res) => {
        context.setJobs(res.data)
        // console.log(res.data)
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
                <div style ={{background:"#E7E7E9"}}>
                    <Container >
                        <Row>
                            <Col>
                                <Card key={id} className="Card " >
                                    <CardTitle className="CardTitle" style ={{background:"#8DB38B"}}>{item.CompanyName}</CardTitle>
                                    <CardSubtitle>Salary ${item.Salary}</CardSubtitle>
                                    <CardBody className="CardBody">{item.Description}</CardBody>
                                    <CardFooter className="CardFooter">
                                        {/* <Button className="mr-2" >Save</Button> */}

                                        <Delete id={item.id} />
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
</div>
                </>
            );
        })
        : "";
}
// }

export default UserDashBoard
