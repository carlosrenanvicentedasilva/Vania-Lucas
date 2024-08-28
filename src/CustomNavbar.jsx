import React from 'react';
import './App.css'; // Certifique-se de que o CSS esteja importado corretamente

const NavbarOffcanvas = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Offcanvas navbar large">
      <div className="container">
        <a className="navbar-brand" href="/">Espaço Vania Lucas</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Espaço Vania Lucas</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#serviços">Nossos serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#onde">Onde atuamos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOffcanvas;
