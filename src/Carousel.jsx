import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foto from './carousel/carousel01.png';

const CarouselComponent = () => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">

      {/* Indicators/dots */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="d-flex align-items-center"
            style={{
              backgroundImage: `url(${Foto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '700px', // Adjust height as needed
            }}
          >
            <div className="container text-end text-dark p-5">
              <h1 className="display-5 fw-bold text-rosa">
                Bem vindo ao espaço
              </h1>
              <h1 className="display-5 fw-bold text-black">
                Vanica Lucas.
              </h1>
              <h6 className="text-black">
                Temos mais de 15 anos de atuação no mercado.
              </h6>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="d-flex align-items-center"
            style={{
              backgroundImage: `url(${Foto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '700px',
            }}
          >
            <div className="container text-end text-white p-5">
              <h1 className="display-4 fw-bold text-black">
                Serviços
              </h1>
              <h6 className="text-black">
                Nos orgulhamos de ter a mais alta qualidade
              </h6>
              <h6 className="text-black">
                e egiene na execução de nossos serviços.
              </h6>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="d-flex align-items-center"
            style={{
              backgroundImage: `url(${Foto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '700px',
            }}
          >
            <div className="container text-end text-white p-5">
              <h1 className="display-4 fw-bold text-black">
                Depilação
              </h1>
              <h6 className="text-black">
                Depilação de qualidade e otimos materias
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Left and right controls/icons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default CarouselComponent;
