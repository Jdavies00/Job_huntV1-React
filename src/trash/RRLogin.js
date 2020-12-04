
import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';



// const [userEmail, setUserEmail] = useState('')
// const [userName, setUserName] = useState('')
// const [userPassword, setUserPassword] = useState('')
// const [userInfo, setUserInfo] = useState('')
// const [bearer, setToken] = useState('')

function RRLogin({ setUserEmail, userEmail, 
    setUserPassword, userPassword, 
    bearer, setToken,
    setUserInfo,userInfo
    }){
    
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
        <Container>
            <Row>
                <Col>
                <h2>Login</h2>
 <Form className='Login' onSubmit={e => handleSubmit(e)}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email"
                                name="email"
                                id="exampleEmail"
                                onChange={e => setUserEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePasssword"
                                onChange={e => setUserPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Col>
                        <Row>
                        <Button color = "danger" type='submit'>Login</Button>
                        </Row>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>


    );
}
export default RRLogin;
