import React from 'react';

import CustomNavbar from './CustomNavbar';
import Carousel from './Home';
import DepilaçãoCards from './DepilaçãoCards';
import CustomCards from './UnhaCards';
import Contatos from './contato/Contato';

import Footer from './Footer';

import './App.css'; // Certifique-se de que o CSS para o divisor esteja incluído aqui

const Home = () => {

  return (
      <div>
        <CustomNavbar />

        <div id="home">
          <Carousel />
        </div>

        <div id="serviços">
          <DepilaçãoCards />
        </div>

        <div className="divider"></div>

        <div id="serviços">
          <CustomCards />
        </div>

        <div className="divider"></div>

        <div id="contatos">
        <Contatos />
        </div>

        <div className="divider"></div>

        <Footer />
      </div>
  );
};

export default Home;
