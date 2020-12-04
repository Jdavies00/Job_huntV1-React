

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import Login from "../Components/Login"



const ModalExample = (props) => {
    const [userEmail, setUserEmail] = useState('')
    //   const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userInfo, setUserInfo] = useState('')
    const [bearer, setToken] = useState('')
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}Login</Button>
            
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Login</ModalHeader>

                <Login
                    setUserEmail={setUserEmail}
                    userEmail={userEmail}

                    setToken={setToken}
                    bearer={bearer}

                    setUserPassword={setUserPassword}
                    userPassword={userPassword}

                    setUserInfo={setUserInfo}
                    userInfo={userInfo}
                />
                <ModalFooter>                    
                    <Button color="danger"  onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;