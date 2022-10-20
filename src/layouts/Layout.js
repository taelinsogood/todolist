import React from 'react'
import PickleHeader from './PickleHeader';
import PickkleFooter from './PickkleFooter';
import { Container } from 'react-bootstrap'
import PickleSidebar from './PickleSidebar';
import PickleContent from './PickleContent';

const Layout = () => {
  return (
    <>
      <PickleHeader />
      <Container style={{ minHeight: "75vh" }}>  {/* Layout에 {children}으로 보냄 */}
        <PickleContent />
      </Container>
      <PickkleFooter />
    </>
  )
}

export default Layout;