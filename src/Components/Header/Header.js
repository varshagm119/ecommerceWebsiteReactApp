import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";

const Header = () => {
  const {user, logOut} = useUserAuth();
  const logoutHandle = async() =>{
    try{
      await logOut()
    }catch(err){
      console.log(err.message)
    }
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">Music Collection</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link to="/home" className="nav-link">
                  HOME
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/store" className="nav-link">
                  STORE
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about" className="nav-link">
                  ABOUT
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contactus" className="nav-link">
                  CONTACT US
                </Link>
              </Nav.Item>
            </Nav>
            
            <Nav className="me-auto">
             {user && <Cart />}
            </Nav>
            <Nav>
              {!user && <Link to='/' className="nav-link">Log in</Link>}
            </Nav>
            <Nav>
              {user && <Button onClick={logoutHandle}>Log out</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
