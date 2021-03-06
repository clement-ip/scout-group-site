import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import FAQ from './components/FAQ/FAQ.js';
import Contact from './components/Contact.js';
import ScrollToTop from './components/ScrollToTop.js'
import Cubs from './components/programs/Cubs.js';
import Scouts from './components/programs/Scouts.js';
import Venturers from './components/programs/Venturers.js';
import Rovers from './components/programs/Rovers.js';

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
            <Route path='/cubs' component={Cubs}/>
            <Route path='/scouts' component={Scouts}/>
            <Route path='/venturers' component={Venturers}/>
            <Route path='/rovers' component={Rovers}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
