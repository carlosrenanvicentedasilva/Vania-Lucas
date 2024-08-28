import React from 'react';

import CustomNavbar from './CustomNavbar';
import Carousel from './Carousel';
import DepilaçãoCards from './DepilaçãoCards';
import CustomCards from './UnhaCards';

import './App.css';

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

      <hr />

      <div id="serviços" className='serviços'>
      <CustomCards />
      </div>

      <hr />

      <div id="onde">
      <h1>Onde atuamos</h1>
      </div>

      <hr />

      <div id="contatos">
      <h1>Contato</h1>
      </div>

      <hr />

      <h1>Footer</h1>
    </div>
  );
};

export default Home;
