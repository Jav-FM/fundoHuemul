import React from "react";
import "./CustomNavbar.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import logo from "../../../assets/img/logo_blanco.png";

const CustomNavbar = () => {
  return (
    <Navbar
      id="navbar"
      expand="lg"
      collapseOnSelect
      className="navbar"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img id="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="linksContainer me-auto">
            <Nav.Link href="#proyecto">Proyecto</Nav.Link>
            <Nav.Link href="#video">Video</Nav.Link>
            <Nav.Link href="#caracteristicas">Características</Nav.Link>
            <Nav.Link href="#tourVirtual">Tour Virtual</Nav.Link>
            <Nav.Link href="#sector">La Patagonia</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>

          {/* <Nav>
            <Nav.Link as={Link} to="/register">
              <h3>
                <AiFillInstagram />
              </h3>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <h3>
                <AiFillFacebook />
              </h3>
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { CustomNavbar };
