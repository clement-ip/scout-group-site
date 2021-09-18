import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';


function ScrollToTop(){
  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false);
    }
  };

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <div className={`back-to-top d-flex align-items-center justify-content-center ${showScroll ? "active" : " "}`} onClick={scrollToTop}>
      <i className="bi bi-arrow-up-short"/>
    </div>
  );
}

export default ScrollToTop;
