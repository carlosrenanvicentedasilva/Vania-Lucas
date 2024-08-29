import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const FooterComponent = () => (
  <footer className="footer bg-dark">
    <Container>
      <Row>
        <Col md={12} className="text-white text-center">
          <p className="footer-text">&copy; {new Date().getFullYear()} Todos os direitos reservados, crvdsxd.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterComponent;
