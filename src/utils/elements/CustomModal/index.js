import React from "react";
import { Modal } from "react-bootstrap";
import "./CustomModal.scss";
import { Body, Footer } from "./Plantillas/Pascua";

const CustomModal = ({ show, setShow, goToContact }) => {
  const handleClose = () => {
    setShow(false);
  };

  const handleWantAReservation = () => {
    window.location.href = "#contacto";
    handleClose();
  };

  return (
    <Modal
      backdrop="static"
      id="customModal"
      show={show}
      onHide={() => setShow(false)}
      size="md"
    >
      <Modal.Header id="modalHeader" closeButton closeLabel="Cerrar" />

      <Modal.Body>
        <Body />
      </Modal.Body>
      <Modal.Footer id="modalFooter">
        <Footer
          handleClose={handleClose}
          handleWantAReservation={handleWantAReservation}
        />
      </Modal.Footer>
    </Modal>
  );
};

export { CustomModal };
