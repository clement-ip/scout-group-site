import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Programs from './programs/ProgramsMain';
import Carousel from 'react-bootstrap/Carousel';


function Hero(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => { 
    document.title = "69th Scout Group"; 
  },[]);
  
  return (
    <section id="hero">
      <Carousel activeIndex={index} onSelect={handleSelect} fade 
        prevLabel = ""
        nextLabel = ""
        prevIcon={<span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"/>} 
        nextIcon={<span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"/>}>
        <Carousel.Item style={{backgroundImage: `url(./assets/img/slide/1.jpg)`}}>
          {/* <img
            className="d-block w-100"
            src="assets/img/slide/slide1.jpg"
            alt="First slide"
          /> */}
        </Carousel.Item>
        <Carousel.Item style={{backgroundImage: `url(./assets/img/slide/2.jpg)`}}>
          {/* <img
            className="d-block w-100"
            src="assets/img/slide/slide2.jpg"
            alt="Second slide"
          /> */}
        </Carousel.Item>
        <Carousel.Item style={{backgroundImage: `url(./assets/img/slide/3.jpg)`}}>
          {/* <img
            className="d-block w-100"
            src="assets/img/slide/slide3.jpg"
            alt="Third slide"
          /> */}
        </Carousel.Item>
      </Carousel>
      <div className="carousel-container">
          <div className="carousel-content animate__animated animate__fadeInUp text-center">
            <h2>69th Knights of Kensington Scout Group</h2>
            <p>Since 2003. Based in Vancouver, British Columbia, Canada.</p>
            <div className="text-center">
              <Link to="/about" className="btn-start-links">History</Link>
              <Link to="/calendar" className="btn-start-links">Calendar</Link>
              {/* <Link to="/programs" className="btn-start-links">Programs</Link> */}
              <Link to="/contact" className="btn-start-links">Contact Us</Link>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Hero;