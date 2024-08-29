import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppContact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5584988888570', '_blank'); // Substitua pelo seu número de WhatsApp
  };

  return (
    <Container className="whatsapp-contact-page">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1 className="contact-title">Entre em Contato</h1>
          <p className="contact-subtitle">
            Estamos aqui para ajudar! Clique no botão abaixo para nos enviar uma mensagem pelo WhatsApp.
          </p>
          <Button
            variant="success"
            className="whatsapp-button"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp size={24} className="whatsapp-icon" /> Fale Conosco
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatsAppContact;
