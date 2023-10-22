import "./App.css";
import {  Navbar, Container, Nav } from "react-bootstrap";

import Product from "./Components/Products/Product";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">Music Collection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#home">STORE</Nav.Link>
              <Nav.Link href="#home">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Product />
    </div>
  );
}

export default App;
