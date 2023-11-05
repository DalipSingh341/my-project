import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EeNav from './components/EeNav';
import Hero from './components/Hero';
import Gains from './components/Gains';
import Gainstwo from './components/Gainstwo';
import Core from './components/Core';
import GainsThree from './components/GainsThree';
import Tokenomics from './components/Tokenomics';
import Total from './components/Total';
import Future from './components/Future';
import OurTeam from './components/OurTeam';
import EcoSystem from './components/EcoSystem';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Roadmap from './components/Roadmap';

function App() {

  return (
    <>
      <EeNav /> 
      <GainsThree/>
      <Core />
      <Tokenomics/>
      <Total/>
      <Future/>
      <OurTeam/>
      <EcoSystem/>
      <Roadmap/>
      <Contact/>
      <Footer/>
    </>

  );
}

export default App
