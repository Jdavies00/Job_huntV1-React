import React, { useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from '../utilities/AppContext';
import "../Components/Css/register.css";

function Register() {
    const history = useHistory();
    const context = useContext(AppContext);
    const mainContainer = {
        height: 700,
        width: 1300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const content = {
        height: 100,
        width: 500,
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/register'
        const method = 'post'
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
        const data = { name: context.userName, email: context.userEmail, password: context.userPassword }

        axios({
            url,
            method,
            headers,
            data,
        })
            .then(res => {
                context.setToken(res.data.data.token)
                window.localStorage.setItem("token", res.data.data.token)
                history.push("/")
            })
            .catch(err => console.log('error: ', err))
        // console.log(token)
    }
 
    return (
        <div className='ree'>
            <Container style={mainContainer} >
                <Row style={content} className="pt-5 pb-5">
                    <Col className="pt-5 pb-5">
                        <h2>Register</h2>
                        <Form className='Form' onSubmit={e => handleSubmit(e)}>
                            <FormGroup>
                                <Label for="exampleEmail"></Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail1"
                                    placeholder="Email"
                                    onChange={e => context.setUserEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword"></Label>
                                <Input type="password"
                                    name="password"
                                    id="examplePassword2"
                                    placeholder="Password"
                                    onChange={e => context.setUserPassword(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail"></Label>
                                <Input type="name"
                                    name="name"
                                    id="UserName"
                                    placeholder="Name"
                                    onChange={e => context.setUserName(e.target.value)}
                                />
                            </FormGroup>
                            <Col>
                                <Button color="fb9c3b" type='submit'>Register</Button>
                            </Col>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Register
