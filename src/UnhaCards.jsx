import React from 'react';
import Slider from 'react-slick';

import Foto01 from './unhas/01.jpg';
import Foto02 from './unhas/02.jpg';
import Foto03 from './unhas/03.jpg';

const UnhaCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: Show two slides
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768, // For devices with screen width less than 768px
        settings: {
          slidesToShow: 1, // Show one slide
          slidesToScroll: 1,
        }
      }
    ]
  };

  const cardStyle = {
    height: '300px',
    width: '310px',
    overflow: 'hidden',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto' // Center the cards horizontally
  };

  const imgStyle = {
    height: '300px',
    width: '300px',
    objectFit: 'cover',
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
    <div className="container" id="custom-cards">
      <h1 className="display-5 fw-bold text-black text-center mb-5">Unhas</h1>

      <Slider {...settings}>
        <div style={cardStyle}>
          <img src={Foto01} alt="Unha Modelo 1" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Unha Modelo 1</h3>
            <p style={descriptionStyle}>Descrição do serviço de unhas modelo 1.</p>
            <p style={priceStyle}>R$ 20,00</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={Foto02} alt="Unha Modelo 2" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Unha Modelo 2</h3>
            <p style={descriptionStyle}>Descrição do serviço de unhas modelo 2.</p>
            <p style={priceStyle}>R$ 20,00</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={Foto03} alt="Unha Modelo 3" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Unha Modelo 3</h3>
            <p style={descriptionStyle}>Descrição do serviço de unhas modelo 3.</p>
            <p style={priceStyle}>R$ 20,00</p>
          </div>
        </div>
      </Slider>

      <div className='container mt-5'>
          <div className='row'>
              <div className='col-12'>
                <h3 className='fw-bold text-white text-center'>Estamos nos preparando para atender a domicílio</h3>
              </div>
          </div>
      </div>

    </div>
  );
};

export default UnhaCards;
