import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const FooterComponent = () => (
  <footer className="footer bg-dark">
    <Container>
      <Row>
        <Col className='text-white'>
          <h5 className="footer-title">Parceiros</h5>
          <p className="footer-text">Sagatech</p>
        </Col>
        <Col className='text-white'>
          <h5 className="footer-title">Serviços</h5>
          <p className="footer-text">Individualização de água e gás</p>
        </Col>
        <Col className='text-white'>
          <h5 className="footer-title">Serviços especializados</h5>
          <p className="footer-text">Vistoria condominial</p>
        </Col>
        <Col className='text-white'>
          <h5 className="footer-title">Clientes</h5>
            <h3>Login</h3>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="text-white text-center">
          <p className="footer-text">&copy; {new Date().getFullYear()} Todos os direitos reservados, crvdsxd.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterComponent;
