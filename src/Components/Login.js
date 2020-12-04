
import React, { useEffect, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import UserDashBoard from "./userDashBoard"
import AppContext from '../utilities/AppContext'
import { useHistory } from 'react-router-dom';
// import axiosHelper from "../utilities/axiosHelper"
import HomePage from './homePage';

function Login() {
    const history = useHistory();
    const context = useContext(AppContext);
    
    function handleSubmit(event) {
        event.preventDefault();
        const headers = {
            Accept: "Application/Json",
            'Content-Type': 'application/json;charset=UTF-8',
        }
        axios({
            url: "http://localhost:8000/v1/oauth/token",
            method: "post",
            data: {
                "grant_type": "password",
                "client_id": 2,
                "client_secret": "LMMmg11t7o8SrFlGB7oQkhrmfFOpknmY36l50k7T",
                "password": context.userPassword,
                "username": context.userEmail,
                "scope": ""
            },
            headers,
        })
        .then(res => {
            window.localStorage.setItem("token", res.data.access_token)
            context.setToken(res.data.access_token)
            console.log(res.data.access_token)
            history.push("/homePage")
            
        })
        .catch(err => console.log('error: ', err))
    }
    
    useEffect((setUserInfo) => {
        
        axios({
            url: "http://localhost:8000/api/user",
            method: "get",
            headers: {
                Accept: "application/json",
                Authorization: `token ${context.token}`
            }
        })
        .then(response => {
            context.setUserInfo(response.data)
            console.log(setUserInfo)
        })
        .catch(err => console.log('error: ', err))
        
    }, [context.token])
    
    // useEffect(() => {
        //     localStorage.clear();
        //     return () => {
            //     }
            return (
                context.token.length ? <HomePage /> :
                <Container >
                <Row>
                    <Col>
                        <h2>Login</h2>
                        <Form className='Login' onSubmit={e => handleSubmit(e)}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email"
                                    name="email"
                                    id="exampleEmail1"
                                    onChange={e => context.setUserEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePasssword2"
                                    onChange={e => context.setUserPassword(e.target.value)}
                                />
                            </FormGroup>
                            <Col>
                                <Row>
                                    <Button color="danger" type='submit'>Login</Button>
                                </Row>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>


    );
}
export default Login;
