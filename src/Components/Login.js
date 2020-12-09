
import React, {  useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import AppContext from '../utilities/AppContext'
import { useHistory } from 'react-router-dom';


function Login() {
    const mainContainer = {
        height: 700,
        // width: 1300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }
      
      const content = {
        height: 100,
        // width: 500,
      }
    const history = useHistory();
    const context = useContext(AppContext);

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
                "client_secret": "kRf3R73RW9UF8Ungu4nMWit4ELRZ01xaiVnKocdB",
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
                history.push("/dashboard")

            })
            .catch(err => console.log('error: ', err))
    }
    return (
                <Container style={mainContainer} > 
                    <Row style={content} >
                        <Col>
                            <Form className='Login' onSubmit={e => handleSubmit(e)}>
                                <FormGroup>
                                    <Label for="exampleEmail"></Label>
                                    <Input type="email"
                                        name="email"
                                        id="exampleEmail1"
                                        placeholder="Email"
                                        onChange={e => context.setUserEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword"></Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePasssword2"
                                        placeholder="Password"
                                        onChange={e => context.setUserPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <Col>
                                    <Row>
                                        <Button color="fb9c3b" type='submit'>Login</Button>
                                    </Row>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
             </Container>
    );
}
export default Login;
