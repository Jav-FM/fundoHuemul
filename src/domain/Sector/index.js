import React from "react";
import "./Sector.scss";
import img1 from "../../assets/img/imgsSector/parque-nacional.jpg";
import img2 from "../../assets/img/imgsSector/carretera-austral.jpg";
import img3 from "../../assets/img/imgsSector/lagos-pesca.jpg";
import img4 from "../../assets/img/imgsSector/gastronomia.jpg";
import img5 from "../../assets/img/imgsSector/cercania.jpg";

const Sector = () => {
  return (
    <section id="sector" className="container">
      <h3 id="subtitle">Atractivos del sector</h3>
      <h1 id="title">La Patagonia Chilena</h1>
      <div className="sectorItem">
        <div className="itemImageContainer">
          <img className="itemImage" src={img1} alt="itemImage1" />
        </div>
        <div className="textContainer">
          <h4>Parques Nacionales</h4>
          <p>
            Los parques nacionales de la zona tienen diversas especies de flora
            y fauna nativa, un lugar para desconectarse del mundo junto a su
            maravillosa naturaleza. Entre los principales parques cercanos
            destacan:
          </p>
          <ul>
            <li>Reserva Nacional Río Simpson</li>
            <li>Reserva Nacional Cerro Castillo</li>
            <li>Reserva Nacional Coyhaique</li>
          </ul>
        </div>
      </div>
      <div className="sectorItem inverseImageContainer">
        <div className="itemImageContainer">
          <img className="itemImage" src={img2} alt="itemImage2" />
        </div>
        <div className="textContainer">
          <h4>Carretera Austral</h4>
          <p>
            Una carretera única de 1240 kilómetros que conecta desde puerto
            montt a villa O'Higgins. Objeto de visita y turismo para cientos de
            personas de todo el mundo que año a año la visitan por sus
            exclusivos paisajes.
          </p>
        </div>
      </div>
      <div className="sectorItem">
        <div className="itemImageContainer">
          <img className="itemImage" src={img3} alt="itemImage3" />
        </div>
        <div className="textContainer">
          <h4>Sectores de Pesca</h4>
          <p>
            La zona cuenta con muchos lagos, entre los que destacan lago:
            la Paloma, Azul, Elizalde y Caro, los cuales presentan pesca con
            mosca, de orilla o arrastre y que son visitadas por muchos turistas
            que viajan de diversas partes del mundo a pescar
          </p>
        </div>
      </div>

      <div className="sectorItem inverseImageContainer">
        <div className="itemImageContainer">
          <img className="itemImage" src={img4} alt="itemImage4" />
        </div>
        <div className="textContainer">
          <h4>Gastronomía Local</h4>
          <p>
            Una de las especialidades de la zona, el cordero patagón, destaca
            por su preparación y sus sabores, una experiencia que debes vivir.
          </p>
        </div>
      </div>

      <div className="sectorItem">
        <div className="itemImageContainer">
          <img className="itemImage" src={img5} alt="itemImage5" />
        </div>
        <div className="textContainer">
          <h4>Conectividad y Cercanía</h4>
          <p>
            Rápido acceso al Aeropuerto de Balmaceda y a todos los servicios que
            necesitas en el centro de la ciudad de Coyhaique:
            <ul>
              <li>Colegios</li>
              <li>Instituciones públicas</li>
              <li>Clínicas y Bancos</li>
              <li>Supermercados y Servicios</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export { Sector };
