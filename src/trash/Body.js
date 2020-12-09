import UserDashBoard from "../Components/userDashBoard"
import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';


//setUserInfo, userInfo
function Login({ setUserEmail, userEmail, setUserPassword, userPassword, bearer, setToken }) {
    function handleSubmit(event) {
        event.preventDefault();
        const headers = {
            Accept: "Application/Json",
            'Content-Type': 'application/json;charset=UTF-8',
        }
        axios({
            url: "http://jobhunterv1.herokuapp.com/v1/oauth/token",

            // url: "http://localhost:8000/v1/oauth/token",
            method: "post",
            data: {
                "grant_type": "password",
                "client_id": 2,
                "client_secret": "zyNK80oW7L1JWROL8YBa4W9HtVNSoHWrVQMJ1nrr",
                "password": userPassword,
                "username": userEmail,
                "scope": ""
            },
            headers,
        })
        .then(res => setToken(prevbearer => prevbearer = res.data.access_token))
        .catch(err => console.log('error: ', err))
        console.log(bearer)
    }
    
    useEffect(() => {
        {
            bearer &&
            axios({
                url: "http://jobhunterv1.herokuapp.com/v1/oauth/token",

                // url: "http://localhost:8000/api/user",
                method: "get",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${bearer}`
                }
            })
            .then(response => console.log(response))
            .catch(err => console.log('error: ', err))
        }
    }, [bearer])
    return (
    
        <Container>
            <Row>
                <Col>
                <h2>Login</h2>
 <Form className='Login' onSubmit={e => handleSubmit(e)}>
                        <FormGroup>
                            <Label for="exampleEmail"></Label>
                            <Input type="email"
                                name="email"
                                id="exampleEmail"
                                onChange={e => setUserEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword"></Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePasssword"
                                onChange={e => setUserPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Col>
                        <Button type='submit'>Login</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>


    );
}
export default Login;
