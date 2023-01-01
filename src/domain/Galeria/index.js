import React, { useState } from "react";
import "./Galeria.scss";
import image1 from "../../assets/img/imgsGaleria/DJI_0106.jpg";
import image2 from "../../assets/img/imgsGaleria/DJI_0107.jpg";
import image3 from "../../assets/img/imgsGaleria/DJI_0108.jpg";
import image4 from "../../assets/img/imgsGaleria/DJI_0114.jpg";
import image5 from "../../assets/img/imgsGaleria/DJI_0122.jpg";
import image6 from "../../assets/img/imgsGaleria/DJI_0124.jpg";
import image7 from "../../assets/img/imgsGaleria/DJI_0129.jpg";
import image8 from "../../assets/img/imgsGaleria/DJI_0140.jpg";
import image9 from "../../assets/img/imgsGaleria/DJI_0146.jpg";
import image10 from "../../assets/img/imgsGaleria/DJI_0152.jpg";
import image11 from "../../assets/img/imgsGaleria/DJI_0154.jpg";
import image12 from "../../assets/img/imgsGaleria/DJI_0156.jpg";
import image13 from "../../assets/img/imgsGaleria/DJI_0175.jpg";
import image14 from "../../assets/img/imgsGaleria/DJI_0180.jpg";
import image15 from "../../assets/img/imgsGaleria/DJI_0195.jpg";
import image1mini from "../../assets/img/minisGaleria/DJI_0106mini.jpg";
import image2mini from "../../assets/img/minisGaleria/DJI_0107mini.jpg";
import image3mini from "../../assets/img/minisGaleria/DJI_0108mini.jpg";
import image4mini from "../../assets/img/minisGaleria/DJI_0114mini.jpg";
import image5mini from "../../assets/img/minisGaleria/DJI_0122mini.jpg";
import image6mini from "../../assets/img/minisGaleria/DJI_0124mini.jpg";
import image7mini from "../../assets/img/minisGaleria/DJI_0129mini.jpg";
import image8mini from "../../assets/img/minisGaleria/DJI_0140mini.jpg";
import image9mini from "../../assets/img/minisGaleria/DJI_0146mini.jpg";
import image10mini from "../../assets/img/minisGaleria/DJI_0152mini.jpg";
import image11mini from "../../assets/img/minisGaleria/DJI_0154mini.jpg";
import image12mini from "../../assets/img/minisGaleria/DJI_0156mini.jpg";
import image13mini from "../../assets/img/minisGaleria/DJI_0175mini.jpg";
import image14mini from "../../assets/img/minisGaleria/DJI_0180mini.jpg";
import image15mini from "../../assets/img/minisGaleria/DJI_0195mini.jpg";
import { ModalGaleria } from "./ModalGaleria";

const Galeria = () => {
  const [showModal, setShowModal] = useState(false);
  const [imgOnModal, setImgOnModal] = useState(null);
  const [imgOnModalIndex, setImgOnModalIndex] = useState(null);

  const handleClose = () => setShowModal(false);

  const handleShow = (i, img) => {
    setImgOnModal(img);
    setImgOnModalIndex(i);
    setShowModal(true);
  };

  const images = [
    {
      img: image1,
      mini: image1mini,
    },
    {
      img: image2,
      mini: image2mini,
    },
    {
      img: image3,
      mini: image3mini,
    },
    {
      img: image4,
      mini: image4mini,
    },
    {
      img: image5,
      mini: image5mini,
    },
    {
      img: image6,
      mini: image6mini,
    },
    {
      img: image7,
      mini: image7mini,
    },
    {
      img: image8,
      mini: image8mini,
    },
    {
      img: image9,
      mini: image9mini,
    },
    {
      img: image10,
      mini: image10mini,
    },
    {
      img: image11,
      mini: image11mini,
    },
    {
      img: image12,
      mini: image12mini,
    },
    {
      img: image13,
      mini: image13mini,
    },
    {
      img: image14,
      mini: image14mini,
    },
    {
      img: image15,
      mini: image15mini,
    },
  ];

  return (
    <section id="galeria" className="container">
      <ModalGaleria
        show={showModal}
        imgsArray={images}
        actualImageIndex={imgOnModalIndex}
        actualImage={imgOnModal}
        handleClose={handleClose}
      />
      <h2 id="title">Galería del Proyecto</h2>
      <div id="containerGaleria">
        {images.map((img, i) => (
          <img
            onClick={() => handleShow(i, img.img)}
            key={i}
            src={img.mini}
            className="fluid galleryImage"
            alt="img"
          />
        ))}
      </div>
    </section>
  );
};

export { Galeria };
