import React from 'react'
import { Container, Modal } from 'react-bootstrap'
import HoriLine from './HoriLine'

const SignInModal = ({ show, onHide }) => {
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
                      
                    <HoriLine text="Or" />
                    <div>
                        여기에 뭐 넣고 싶은 거 있으면 넣으멧ㅁ
                    </div>
                </Container>
            </Modal>
        </>
    )
}

export default SignInModal