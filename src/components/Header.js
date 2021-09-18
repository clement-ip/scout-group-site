import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    const [menuState, setMenuState] = useState(false);
    const [subMenuState, setSubMenuState] = useState(false);
    
    const toggle = () => {
        setMenuState(!menuState);
    };

    const subToggle = () => {
        setSubMenuState(!subMenuState);
    };
  
    const checkToggle = () => {
      if(menuState === true){
        subToggle();
      }
      return null;
    }

    const mobileMenuToggle = () => {
        if(menuState === true){
            toggle();
        }
        return null;
    }
  
    return(
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">

                {/* <h1 className="logo me-auto">
                    <NavLink to="/"><span>Com</span>pany</NavLink>
                </h1> */}
                <NavLink to="/" className="logo me-auto">
                    <img src="assets/img/logos/headerLogo.jpg" alt="" className="img-fluid"/>
                </NavLink>

                <nav id="navbar" className={`navbar order-last order-lg-0 ${menuState ? "navbar-mobile" : " "}`}>
                    <ul>
                        <li>
                            <NavLink exact to ="/" onClick={mobileMenuToggle}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={mobileMenuToggle}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/programs' onClick={mobileMenuToggle}>Programs</NavLink>
                        </li>
                        
                        {/* <li className="dropdown"><NavLink to='/programs'>Programs <i className="bi bi-chevron-down"/></NavLink>
                            <ul>
                                <li>
                                    <NavLink to='/programs/cubs'>Cub Scouts (Ages 8-10)</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/programs/scouts'>Scouts (Ages 11-14)</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/programs/venturers'>Venturer Scouts (Ages 15-17)</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/programs/rovers'>Rover Scouts (Ages 18-26)</NavLink>
                                </li> */}
                                {/* <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"/></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li> */}
                            {/* </ul>
                        </li> */}

                        {/* <li>
                            <NavLink to="/faq" onClick={mobileMenuToggle}>FAQ</NavLink>
                        </li> */}
                        <li onClick={checkToggle} className="dropdown"><span>Resources <i className="bi bi-chevron-down"/></span>
                            <ul className={`${subMenuState ? "dropdown-active" : ""}`}>
                                <li>
                                    <a onClick={mobileMenuToggle} href="http://mail.69scouts.org" target="_blank" rel="noopener noreferrer">
                                        Scout Email Login
                                    </a>
                                </li>
                                <li>
                                    <a onClick={mobileMenuToggle} href="https://myscouts.ca" target="_blank" rel="noopener noreferrer">
                                        myScouts
                                    </a>
                                </li>
                                <li>
                                    <a onClick={mobileMenuToggle} href="https://www.scouts.ca/thanks.html" target="_blank" rel="noopener noreferrer">
                                        Thank a Scouter
                                    </a>
                                </li>
                                <li>
                                    <a onClick={mobileMenuToggle} href="https://zoom.us/download" target="_blank" rel="noopener noreferrer">
                                        Zoom (Download)
                                    </a>
                                </li>
                                <li>
                                    <a onClick={mobileMenuToggle} href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">
                                        Google Meets
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='contact' onClick={mobileMenuToggle}>Contact Us</NavLink>
                        </li>
                    </ul>
                    <i onClick={toggle} className={`bi mobile-nav-toggle ${menuState ? "bi-x" : "bi-list"}`}/>
                </nav>

                <div className="header-social-links d-flex">
                    <a href={process.env.REACT_APP_FACEBOOK_URL} className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="bu bi-facebook"/>
                    </a>
                    <a href={process.env.REACT_APP_INSTAGRAM_URL} className="instagram" target="_blank" rel="noopener noreferrer">
                        <i className="bu bi-instagram"/>
                    </a>
                    <a href={process.env.REACT_APP_TWITTER_URL} className="twitter" target="_blank" rel="noopener noreferrer">
                        <i className="bu bi-twitter"/>
                    </a>
                    <a href={process.env.REACT_APP_FLICKR_URL} className="flickr" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-flickr-square"/>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;