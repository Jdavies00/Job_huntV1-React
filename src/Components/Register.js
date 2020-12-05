import React, { useEffect,useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from '../utilities/AppContext'

//consider cutting the bird from Homepage and adding to a grey bg for the total bg of this page
function Register() {
    const history = useHistory();
    const context = useContext(AppContext);

    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/register'
        const method = 'post'
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
        const data = { name: context.userName , email: context.userEmail, password: context.userPassword }

        axios({
            url,
            method,
            headers,
            data,
        })
            .then(res => {
                context.setToken(res.data.data.token)
                window.localStorage.setItem("token",res.data.data.token)
                history.push("/dashboard")
            })
            .catch(err => console.log('error: ', err))
        // console.log(token)
    }
    useEffect(() => {
        if (context.token.length > 0) {
            axios({
                url: "http://localhost:8000/api/user",
                method: "get",
                headers: {
                    Accept: "application/json",
                    Authorization: `token ${context.token}`
                }
            })
                .then(response => context.setUserInfo(response.data))
                .catch(err => console.log('error: ', err))
        }
    }, [context.token])
    return (
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
                                        onChange={e => context.setUserEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password"
                                        name="password"
                                        id="examplePassword2"
                                        onChange={e => context.setUserPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Name</Label>
                                    <Input type="name"
                                        name="name"
                                        id="UserName"
                                        onChange={e => context.setUserName(e.target.value)}
                                    />
                                </FormGroup>
                                <Col>
                                    <Button color="danger" type='submit'>Register</Button>
                                </Col>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default Register
