import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Programs from './programs/ProgramsMain';
import Carousel from 'react-bootstrap/Carousel';


function Hero(){

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="hero">
      <Carousel activeIndex={index} onSelect={handleSelect} fade 
        prevLabel = ""
        nextLabel = ""
        prevIcon={<span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"/>} 
        nextIcon={<span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"/>}>
        <Carousel.Item style={{backgroundImage: `url(assets/img/slide/slide1.jpg)`}}>
          {/* <img
            className="d-block w-100"
            src="assets/img/slide/slide1.jpg"
            alt="First slide"
          /> */}
        </Carousel.Item>
        <Carousel.Item style={{backgroundImage: `url(assets/img/slide/slide2.jpg)`}}>
          {/* <img
            className="d-block w-100"
            src="assets/img/slide/slide2.jpg"
            alt="Second slide"
          /> */}
        </Carousel.Item>
        <Carousel.Item style={{backgroundImage: `url(assets/img/slide/slide3.jpg)`}}>
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
            {/* <div className="text-center"><a href="" className="btn-get-started">Read More</a></div> */}
            <div className="text-center">
              <Link to="/about" className="btn-get-started">History</Link>
              {/* <Link to="/programs" className="btn-get-started">Programs</Link> */}
              <Link to="/contact" className="btn-get-started">Contact Us</Link>
            </div>
          </div>
      </div>
    </section>
  );
    // return(
    //   <div>
    //     <section id="hero">
    //       <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">            
    //         <div className="carousel-inner" role="listbox">
    //           {/* <!-- Slide 1 --> */}
    //           <div className="carousel-item active" style={{backgroundImage: `url(assets/img/slide/slide1.jpg)`}}/>
    //           {/* <div className="carousel-item active">
    //             <img src="assets/img/slide/slide1.jpg" alt="image1"/>
    //           </div> */}
      
    //           {/* <!-- Slide 2 --> */}
    //           <div className="carousel-item" style={{backgroundImage: `url(assets/img/slide/slide2.jpg)`}}/>
      
    //           {/* <!-- Slide 3 --> */}
    //           <div className="carousel-item" style={{backgroundImage: `url(assets/img/slide/slide3.jpg)`}}/>
    //         </div>
      
    //         <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
    //           <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"/>
    //         </a>
      
    //         <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
    //           <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"/>
    //         </a>
      
    //         {/* <ol className="carousel-indicators" id="hero-carousel-indicators"/>*/}
      
    //       </div>
    //       <div className="carousel-container">
    //           <div className="carousel-content animate__animated animate__fadeInUp text-center">
    //             <h2>69th Knights of Kensington Scout Group</h2>
    //             <p>Since 2003. Based in Vancouver, British Columbia, Canada.</p>
    //             {/* <div className="text-center"><a href="" className="btn-get-started">Read More</a></div> */}
    //             <div className="text-center">
    //               <Link to="/about" className="btn-get-started">History</Link>
    //               {/* <Link to="/programs" className="btn-get-started">Programs</Link> */}
    //               <Link to="/contact" className="btn-get-started">Contact Us</Link>
    //             </div>
    //           </div>
    //       </div>
    //     </section>
    //     {/* <Programs/> */}
    //   </div>
    // );
}

export default Hero;