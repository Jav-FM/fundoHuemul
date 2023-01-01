import React from "react";
import { Button, Image } from "react-bootstrap";
import "./Caracteristicas.scss";
import { BsFillTreeFill } from "react-icons/bs";
import mapImage from "../../assets/img/mapa.JPG";

const Caracteristicas = () => {
  const features = [
    { text: "Rol propio" },
    { text: "Parcelas desde 5000 m2" },
    { text: "Autorizadas acorde a normativa legal" },
    { text: "Acceso inmediato a orilla de camino" },
    { text: "Terrenos con hermosas vistas" },
    { text: "Terrenos planos y semiplanos" },
    { text: "Factibilidad real de Agua y Electricidad (poste)" },
    { text: "Ubicado a pocos minutos del aeropuerto y el centro de la ciudad" },
    { text: "A 54 minutos del Parque Nacional Cerro Castillo" },
    { text: "A 67 minutos del Puerto Ingeniero Ibañez" },
    { text: "Zona Internacional de Pesca: Lago Castor, La Paloma" },
    {
      text: "A 3 minutos de zona de pesca Río Simpson",
    },
    { text: "Carretera Austral" },
  ];

  return (
    <section id="caracteristicas" className="container">
      <h2 id="title">Características y Ubicación</h2>
      <div id="contentContainer">
        <div id="mapContainer">
          <Image id="mapImage" src={mapImage} alt="mapa" />
          <a
            href="https://goo.gl/maps/JayadUaZsTNdMTBdA"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="dark" size="lg">
              Abrir en Google Maps
            </Button>
          </a>
        </div>
        <div id="caracteristicasContainer">
          {features.map((f, i) => (
            <div key={i} className="caracteristicaContainer">
              <h4 className="caracteristicaIcon">
                <BsFillTreeFill />
              </h4>
              <h5>{f.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Caracteristicas };
