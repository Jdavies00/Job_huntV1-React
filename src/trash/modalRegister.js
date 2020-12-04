

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import UserDashBoard from "../Components/userDashBoard";
import Register from "../Components/Register"



const ModalExample = (props) => {
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
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
            <Button color="danger" onClick={toggle}>{buttonLabel}Register</Button>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Register</ModalHeader>

                <Register setUserEmail={setUserEmail}
                    userEmail={userEmail}

                    setUserName={setUserName}
                    userName={userName}

                    setUserPassword={setUserPassword}
                    userPassword={userPassword}

                    setToken={setToken}
                    bearer={bearer} 

                    setUserInfo= {setUserInfo}
                    userInfo ={userInfo}
                    />

                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;