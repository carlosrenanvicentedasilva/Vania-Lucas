import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foto from './carousel/carousel01.png'; // Verifique se o caminho está correto

const CarouselComponent = () => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      
      {/* Indicators/dots */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="d-flex align-items-center justify-content-end"
            style={{
              backgroundImage: `url(${Foto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '70vh', // Ajusta a altura para ser 70% da altura da tela
              position: 'relative',
            }}
          >
            <div className="container text-end text-dark p-3 p-md-5 position-absolute bottom-0 end-0">
              <h1 className="display-5 fw-bold text-rosa">Bem vindo ao espaço</h1>
              <h1 className="display-5 fw-bold text-black">Vanica Lucas.</h1>
              <h6 className="text-black">Temos mais de 15 anos de atuação no mercado.</h6>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="d-flex align-items-center justify-content-end"
            style={{
              backgroundImage: `url(${Foto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '70vh', // Ajusta a altura para ser 70% da altura da tela
              position: 'relative',
            }}
          >
            <div className="container text-end text-white p-3 p-md-5 position-absolute bottom-0 end-0">
              <h1 className="display-4 fw-bold text-black">Serviços</h1>
              <h6 className="text-black">Nos orgulhamos de ter a mais alta qualidade</h6>
              <h6 className="text-black">e higiene na execução de nossos serviços.</h6>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="d-flex align-items-center justify-content-end"
            style={{
              backgroundImage: `url(${Foto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '70vh', // Ajusta a altura para ser 70% da altura da tela
              position: 'relative',
            }}
          >
            <div className="container text-end text-white p-3 p-md-5 position-absolute bottom-0 end-0">
              <h1 className="display-4 fw-bold text-black">Depilação</h1>
              <h6 className="text-black">Depilação de qualidade e ótimos materiais</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Left and right controls/icons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
