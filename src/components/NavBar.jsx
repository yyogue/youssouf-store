import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { ApiProvider } from "../context/Api";

function NavBar() {

  const stylingComp = {
    textDecoration: "none",
    color: "aqua",
  };

  // const stylingCart = {
  //   textDecoration: "none",
  //   color: "white",
  // };
  function mode () {
  const light = {
    padding: "40px",
    backgroundColor: "#B0AE0F",
  };
  const dark = {
    padding: "40px",
    backgroundColor: "black",
    color: "white"
  };
  return theme ? light : dark
  }



  const context = useContext(ApiProvider)

  const { theme, setTheme } = context




  const count = useSelector((state) => state.counter.count);

  const mainNavStyle = {
    padding: "40px",
    backgroundColor: "#B0AE0F",
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={mode()}>
        <Container>
          <Navbar.Brand style={theme?{ color: "black" } : { color:"white" } } href="/">Youssouf's Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={theme?{ color: "black" } : { color:"white" } } href="/contact">Contact</Nav.Link>
              <Nav.Link style={theme?{ color: "black" } : { color:"white" } } href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link style={theme?{ color: "black" } : { color:"white" } } eventKey={2} href="#memes">
                Cart {count}
              </Nav.Link>
              {theme ? <Nav.Link onClick={() => setTheme(false)}>☀️</Nav.Link> : <Nav.Link onClick={() => setTheme(true)}>🌙</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
