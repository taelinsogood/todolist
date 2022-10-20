import React from 'react'
import { Modal, Container } from 'react-bootstrap'
import Signin from 'pickle/Signin'
import HoriLine from './HoriLine'

const SignUpModal = ({ show, onHide }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            회원가입
                        </Modal.Title>
                    </Modal.Header>
                    <Signin />
                    <HoriLine text="Or" />
                    <div>
                        여기에 뭐 넣고 싶은 거 있으면 넣으멧ㅁ 
                    </div>
                </Container>
            </Modal>
        </>
    )
}

export default SignUpModal