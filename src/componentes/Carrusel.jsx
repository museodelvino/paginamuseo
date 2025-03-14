import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa las imágenes
import img1 from "../img/IMG_3474-Editar.jpg";
import img2 from "../img/IMG_3643-Editar.jpg";
import img3 from "../img/IMG_3659.jpg";

const GaleriaFotos = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Galería de fotos */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img1}
            className="d-block w-100 carrusel"
            alt="Imagen 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100 carrusel"
            alt="Imagen 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100 carrusel"
            alt="Imagen 3"
          />
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default GaleriaFotos;