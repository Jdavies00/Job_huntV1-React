import React from 'react'
import Logout from "./logout"
import { Container, Row} from 'reactstrap'


function footer() {
    return (
        <Container>
            <Row>
                <Logout />
            </Row>
        </Container>

    )
}

export default footer

