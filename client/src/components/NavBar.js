// import files
// import React, { useState } from 'react'
import { Navbar, Nav, Container,  } from 'react-bootstrap'
import React from 'react'
import { BagIcon } from 'chakra-ui-ionicons';

const AppNavbar = () => {
    // set modal display state
    // const [showModal, setShowModal] = useState(false)
  
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">HigoDesigns</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                </Nav>
          </Navbar.Collapse>
          <div>
          <BagIcon w={6} h={6} />
          </div>
        </Container>
      </Navbar>
 )
}

export default AppNavbar;