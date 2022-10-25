import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ApiProvider } from "../context/Api";

function NavBar() {

  const stylingComp = {
    textDecoration: "none",
  };

  // const stylingCart = {
  //   textDecoration: "none",
  //   color: "white",
  // };
  function mode () {
  const light = {
    padding: "40px",
    backgroundColor: "#4cc9f0",
    fontFamily: "Oswald",
    fontWeight: '100px'
  };
  const dark = {
    padding: "40px",
    backgroundColor: "#001236",
    color: "white",
    fontFamily: "Oswald",
    fontWeight: "100px",
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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
      </style>
      <Navbar collapseOnSelect expand="lg" style={mode()}>
        <Container>
          <Navbar.Brand style={theme ? { color: "black" } : { color: "white" }}>
            <Link
              to="/"
              style={
                theme
                  ? { textDecoration: "none", color: "black" }
                  : { textDecoration: "none", color: "white" }
              }
            >
              Youssouf's Store
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={theme ? { color: "black" } : { color: "white" }}>
                <Link
                  to="/contact"
                  style={
                    theme
                      ? { textDecoration: "none", color: "black" }
                      : { textDecoration: "none", color: "white" }
                  }
                >
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link style={theme ? { color: "black" } : { color: "white" }}>
                <Link
                  to="/about"
                  style={
                    theme
                      ? { textDecoration: "none", color: "black" }
                      : { textDecoration: "none", color: "white" }
                  }
                >
                  About
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                style={theme ? { color: "black" } : { color: "white" }}
                eventKey={2}
                href="#memes"
              >
                <Link
                  to="/cart"
                  style={
                    theme
                      ? { textDecoration: "none", color: "black" }
                      : { textDecoration: "none", color: "white" }
                  }
                >
                  Cart {count}
                </Link>
              </Nav.Link>
              {theme ? (
                <Nav.Link onClick={() => setTheme(false)}>☀️</Nav.Link>
              ) : (
                <Nav.Link onClick={() => setTheme(true)}>🌙</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
