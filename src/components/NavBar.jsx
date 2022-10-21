import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ApiProvider } from "../context/Api";
function NavBar() {

  const context = useContext(ApiProvider)

  const { themeDark, setThemeDark } = context

  const count = useSelector((state) => state.counter.count);


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className={themeDark? '': "light-mode"} >
        <Container>
          <Navbar.Brand href="/">Youssouf's Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >
                <Link to='/contact'>Contact</Link>
              </Nav.Link>
              <Nav.Link  href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link  eventKey={2} href="#memes">
                Cart {count}
              </Nav.Link>
              {themeDark ? <Nav.Link onClick={() => setThemeDark(false)}>☀️</Nav.Link> : <Nav.Link onClick={() => setThemeDark(true)}>🌙</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
