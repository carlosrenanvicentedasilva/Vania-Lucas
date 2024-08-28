import React from 'react';
import Slider from 'react-slick';

import Foto01 from './unhas/01.jpg';
import Foto02 from './unhas/02.jpg';
import Foto03 from './unhas/03.jpg';

const UnhaCards = () => {
  const settings = {
    dots: true, // Adiciona os pontos de navegação
    infinite: true, // Faz o slider ser infinito
    speed: 1000,
    slidesToShow: 1, // Mostra apenas um card por vez
    slidesToScroll: 1, // Rola um slide por vez
    centerMode: true, // O card atual é centralizado
    variableWidth: true, // Permite cards de diferentes larguras
  };

  const cardStyle = {
    height: '300px', // Defina a altura do card
    width: '330px', // Defina a largura do card
    overflow: 'hidden',
    borderRadius: '15px', // Bordas arredondadas
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra ao redor do card
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const imgStyle = {
    height: '400px', // 60% do card para a imagem
    width: '300px',
    objectFit: 'cover', // A imagem cobre o card
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  };

  const contentStyle = {
    padding: '0px',
  };

  const titleStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#000'
  };

  const descriptionStyle = {
    fontSize: '1em',
    color: '#000',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#000',
  };

  return (
    <div className="container-fluid px-4 py-5" id="custom-cards">
      <h1 className="display-5 fw-bold text-black text-center mb-5">Unhas</h1>

      <Slider {...settings}>
        <div style={cardStyle}>
          <img src={Foto01} alt="Depilação Axilas" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Unha modelo</h3>
            <p style={descriptionStyle}>Remoção completa dos pelos das axilas.</p>
            <p style={priceStyle}>R$ 20,00</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={Foto02} alt="Depilação Coxa" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Unha modelo</h3>
            <p style={descriptionStyle}>Remoção dos pelos das coxas.</p>
            <p style={priceStyle}>R$ 20,00</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={Foto03} alt="Depilação Meia Perna" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Unha modelo</h3>
            <p style={descriptionStyle}>Remoção dos pelos da meia perna.</p>
            <p style={priceStyle}>R$ 20,00</p>
          </div>
        </div>

      </Slider>

      <div className='container mt-5'>
          <div className='row'>
              <div className='col-12'>
                <h1 className='display-6 fw-bold text-black text-center'>Atendemos depilação a domicilio</h1>
              </div>
              <div className='col-12'>
                <h5 className='text-center mt-5'>Agende sua depilação via whatzap e desfrute do conforto de sua casa.</h5>
              </div>
          </div>
      </div>

    </div>
  );
};

export default UnhaCards;
