// import files
import React, { useState } from 'react'
import { Navbar, Nav, Container, Tab } from 'react-bootstrap'
import Auth from '../utils/auth'

const AppNavbar = () => {
    // set modal display state
    const [showModal, setShowModal] = useState(false)
  
    return (
      <>
        {/* <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">HigoDesigns</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link> */}
            
                <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
     HigoDesigns
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#pricing">Shop</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
    </>
  )
}

export default AppNavbar;