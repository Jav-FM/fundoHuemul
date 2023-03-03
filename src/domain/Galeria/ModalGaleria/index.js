import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "../Galeria.scss";

const ModalGaleria = ({
  imgsArray,
  actualImageIndex,
  actualImage,
  handleClose,
  show,
}) => {
  const [imageToShow, setImageToShow] = useState(actualImage);
  const [indexToShow, setIndexToShow] = useState(actualImageIndex);

  useEffect(() => {
    setImageToShow(actualImage);
    setIndexToShow(actualImageIndex);
  }, [show]);

  const handleNavigation = (direction) => {
    let newIndex;
    let newImage;
    if (direction === "ahead") {
      newIndex = indexToShow + 1;
      newImage = imgsArray[newIndex].img;
    } else {
      newIndex = indexToShow - 1;
      newImage = imgsArray[newIndex].img;
    }
    setImageToShow(newImage);
    setIndexToShow(newIndex);
  };

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body id="modalBody">
        <img
          src={imageToShow}
          className="fluid"
          id="galleryModalImage"
          alt="img"
        />
        <div id="navigationButtonsContainer">
          <Button
            variant="dark"
            onClick={() => handleNavigation("back")}
            disabled={indexToShow === 0}
            className="navigationButton"
          >
            <AiFillCaretLeft />
          </Button>
          <Button
            variant="dark"
            onClick={() => handleNavigation("ahead")}
            disabled={indexToShow + 1 === imgsArray.length}
            className="navigationButton"
          >
            <AiFillCaretRight />
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer id="galleryModalFooter">
        <Button variant="dark" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { ModalGaleria };
