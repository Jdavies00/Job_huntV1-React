import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';

function Register({ setUserEmail, userEmail, setUserName, setUserPassword, userName, userPassword, bearer, setToken,setUserInfo}) {
    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/register'
        const method = 'post'
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
        const body = { name: userName, email: userEmail, password: userPassword }
        const data = { name: userName, email: userEmail, password: userPassword }

        axios({
            url,
            method,
            headers,
            body,
            data,
        })
            .then(res => setToken(prevbearer => prevbearer = res.data.data.token))
            .catch(err => console.log('error: ', err))
        // console.log(bearer)
    }
    useEffect(() => {
        {
            bearer &&
            axios({
                url: "http://localhost:8000/api/user",
                method: "get",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${bearer}`
                }
            })
            .then(response => setUserInfo (previnfo => previnfo = response.data))
            .catch(err => console.log('error: ', err))
        }
    }, [bearer])
    return (
        // bearer.length ? <UserDashBoard />:
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2>Register</h2>
                            <Form className='Form' onSubmit={e => handleSubmit(e)}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail1"
                                        onChange={e => setUserEmail(e.target.value)}
                                    />
                                    {/* {userEmail} */}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password"
                                        name="password"
                                        id="examplePassword2"
                                        onChange={e => setUserPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Name</Label>
                                    <Input type="name"
                                        name="name"
                                        id="UserName"
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                </FormGroup>
                                <Col>
                                <Button color= "danger" type='submit'>Register</Button>
                                </Col>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register
