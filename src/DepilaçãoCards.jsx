import React from 'react';
import Slider from 'react-slick';

import Foto01 from './depilação/DepilaçãoAxilas.png';
import Foto02 from './depilação/DepilaçãoCoxa.png';
import Foto03 from './depilação/DepilaçãoPerna.png';
import Foto04 from './depilação/DepilaçãoInquinal.png';

const DepilacaoCards = () => {
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
      <h1 className="display-5 fw-bold text-black text-center mb-5">Depilação</h1>

      <Slider {...settings}>
        <div style={cardStyle}>
          <img src={Foto01} alt="Depilação Axilas" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Depilação Axilas</h3>
            <p style={descriptionStyle}>Remoção completa dos pelos das axilas.</p>
            <p style={priceStyle}>R$ 20,00</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={Foto02} alt="Depilação Coxa" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Depilação Coxa</h3>
            <p style={descriptionStyle}>Remoção dos pelos das coxas.</p>
            <p style={priceStyle}>R$ 35,00</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={Foto03} alt="Depilação Meia Perna" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Depilação Meia Perna</h3>
            <p style={descriptionStyle}>Remoção dos pelos da meia perna.</p>
            <p style={priceStyle}>R$ 25,00</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={Foto04} alt="Depilação Inguinal" style={imgStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>Depilação Inguinal</h3>
            <p style={descriptionStyle}>Remoção dos pelos da partes intimas.</p>
            <p style={priceStyle}>R$ 40,00</p>
          </div>
        </div>
      </Slider>

      <div className='container mt-5'>
          <div className='row'>
              <div className='col-12'>
                <h3 className='fw-bold text-white text-center'>Atendemos depilação a domicilio</h3>
              </div>
              <div className='col-12'>
                <h5 className='text-white text-center mt-2'>Agende sua depilação via whatzap e desfrute do conforto de sua casa.</h5>
              </div>
          </div>
      </div>

    </div>
  );
};

export default DepilacaoCards;
