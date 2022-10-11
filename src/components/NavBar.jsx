import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

function NavBar() {

  // const stylingComp = {
  //   textDecoration: "none",
  //   color: "aqua",
  // };
  // const stylingCart = {
  //   textDecoration: "none",
  //   color: "white",
  // };

  const count = useSelector((state) => state.counter.count);

  const mainNavStyle = {
    padding: "40px",
    backgroundColor: "#B0AE0F",
  };

  return (
    <div >
      <Navbar collapseOnSelect expand="lg"  style={mainNavStyle} >
        <Container>
          <Navbar.Brand href="/">Youssouf's Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Cart {count}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
