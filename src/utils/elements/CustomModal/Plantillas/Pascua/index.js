import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import logo from "../../../../../assets/img/logo_blanco.png";

const Body = () => {
  return (
    <Fragment>
      <div id="modalBody">
        <img id="modalLogo" src={logo} alt="logo" />
        <h2 id="modalTitle">
          Agenda tu visita para Semana Santa con anticipación
        </h2>
        <div id="modalMiddleContent">
          <p>
            Déjanos tu correo y teléfono para agendar tu visita desde el 5 al 9
            de Abril, y podrás optar a descuentos especiales.
          </p>
        </div>

        <div id="modalBottomContent">
          <p>* Cupos limitados</p>
        </div>
      </div>
    </Fragment>
  );
};

const Footer = ({ handleClose, handleWantAReservation }) => {
  return (
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
    </Fragment>
  );
};

export { Body, Footer };
