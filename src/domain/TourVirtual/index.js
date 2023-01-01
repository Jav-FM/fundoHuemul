import React from "react";
import { Button } from "react-bootstrap";
import "./TourVirtual.scss";

const TourVirtual = () => {
  return (
    <section id="tourVirtual" className="container-fluid">
      <div className="container">
        <h2 id="title">Tour Virtual</h2>
        <iframe
          id="visualizadorMasterplan"
          src="https://digitaldesign.cl/360/Galera/tour.html"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </div>

      <a
        href="https://digitaldesign.cl/360/Galera/tour.html"
        rel="noreferrer"
        target="_blank"
      >
        <Button variant="outline-light" size="lg">
          Ver en pantalla completa
        </Button>
      </a>
    </section>
  );
};

export { TourVirtual };
