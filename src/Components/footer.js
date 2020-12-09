import React from 'react'
import Logout from "./logout"
import { Container, Row } from 'reactstrap'


function footer() {
    return (
        <Container>
            <Row className='fixed-bottom tp-2 mt-5' style={{ backgroundColor: '#5F5A42', fontFamily: 'BodoniFlf regular' }}>
                <Logout />
            </Row>
        </Container>


    )
}

export default footer

