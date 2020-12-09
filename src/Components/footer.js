import React from 'react'
import Logout from "./logout"
import { Container, Row } from 'reactstrap'


function footer() {
    return (
        <Row className='fixed-bottom' style={{ backgroundColor: '#5F5A42',fontFamily: 'BodoniFlf regular' }}>
            <Logout />
        </Row>

    )
}

export default footer

