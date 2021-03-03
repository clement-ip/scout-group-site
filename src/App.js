import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import FAQ from './components/FAQ.js';
import Contact from './components/Contact.js';
import ScrollToTop from './components/ScrollToTop.js'

function App() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Header/>
          <Switch>
            <Route exact path='/' component={Hero}/>
            <Route path='/about' component={About}/>
            <Route path='/faq' component={FAQ}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
