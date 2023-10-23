import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Cart from '../Cart/Cart';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="sm" >
        <Container>
          <Navbar.Brand>
            <Link to="/">Music Collection</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">HOME</Nav.Link> 
              <Nav.Link href="store">STORE</Nav.Link> 
              <Nav.Link href="about">ABOUT</Nav.Link> 
              
            </Nav>
            <Nav className='me-auto'>
             <Cart />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header