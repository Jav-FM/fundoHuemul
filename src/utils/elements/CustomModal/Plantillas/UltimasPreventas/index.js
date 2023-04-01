import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import logo from "../../../../../assets/img/logo_blanco.png";

const Body = () => {
  return (
    <Fragment>
      <div id="modalBody">
        <img id="modalLogo" src={logo} alt="logo" />
        <h2 id="modalTitle">
          Compra a precio de lanzamiento,<br></br>15% de descuento.
        </h2>
        <div id="modalMiddleContent">
          <p>Visita y elige tu parcela en el Tour Virtual.</p>
          <p id="slogan">Vive y disfruta la Patagonia.</p>
        </div>

        <div id="modalBottomContent">
          <p>* Consulta promociones al contado.</p>
        </div>
      </div>
    </Fragment>
  );
};

const Footer = ({ handleClose, handleWantAReservation }) => {
  <Fragment>
    <Button
      size="lg"
      variant="outline-dark mx-2"
      onClick={handleWantAReservation}
    >
      Quiero más información
    </Button>
    <Button size="lg" variant="dark mx-2" onClick={handleClose}>
      Cerrar
    </Button>
  </Fragment>;
};

export { Body, Footer };
