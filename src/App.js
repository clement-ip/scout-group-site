import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import FAQ from './components/FAQ.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Footer/> */}
      {/* <Hero/> */}
      <About/>
      {/* <FAQ/> */}
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
