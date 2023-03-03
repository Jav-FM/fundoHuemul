import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./CustomFooter.scss";

const CustomFooter = () => {
  return (
    <Navbar className="navbar  py-5" variant="dark" id="footer">
      <Container fluid>
        <Nav
          id="footer-content"
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Nav.Item className="footer-item">
            Fundo Huemul © 2022 Todos los derechos reservados
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export { CustomFooter };
