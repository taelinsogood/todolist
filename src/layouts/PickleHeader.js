import React from 'react'
import { useState } from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import SignUpModal from './SignUpModal'   
import SignInModal from './SignInModal'

const PickleHeader = () => {
    const [onModal, setOnModal] = useState(false); 
    const [onModal2, setOnModal2] = useState(false);
    return (
    <>           {/* 부트스트랩에서 지정한 모달 함수임 ㅋㅋ */}
    <SignUpModal show={onModal} onHide={()=>setOnModal(false)}/> {/* 일단 보이려면 위든 아래든 임포트!! */}
    <SignInModal show={onModal2} onHide={()=>setOnModal2(false)}/>
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>TAELIN-WORLD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className='ul'>
                            <li className='li'>게시물</li>
                            <li className='li'>리스트</li>
                            <li className='li'>어쩌구</li>
                        </ul>
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Button 
                                    variant="primary"
                                    onClick={()=>setOnModal2(true)}
                                >Sign In</Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Button 
                                    variant="secondary" 
                                    onClick={()=>setOnModal(!onModal)}  // <=> true
                                >Sign Up</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </>
    )
}

export default PickleHeader