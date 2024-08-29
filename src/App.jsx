import React from 'react';

import CustomNavbar from './CustomNavbar';
import Carousel from './Home';
import DepilaçãoCards from './DepilaçãoCards';
import CustomCards from './UnhaCards';

import Footer from './Footer';

import './App.css'; // Certifique-se de que o CSS para o divisor esteja incluído aqui

const Home = () => {

  return (
      <div>
        <CustomNavbar />

        <div id="home" className='home'>
          <Carousel />
        </div>

        <div id="serviços" className='serviços'>
          <DepilaçãoCards />
        </div>

        <div className="divider"></div> {/* Substituindo <hr /> */}

        <div id="serviços" className='serviços'>
          <CustomCards />
        </div>

        <div className="divider"></div> {/* Substituindo <hr /> */}

        <div id="onde">
          <h1>Onde atuamos</h1>
        </div>

        <div className="divider"></div> {/* Substituindo <hr /> */}

        <div id="contatos">
          <h1>Contato</h1>
        </div>

        <div className="divider"></div> {/* Substituindo <hr /> */}

        <Footer />
      </div>
  );
};

export default Home;
