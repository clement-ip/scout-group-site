import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a href="index.html"><span>Com</span>pany</a></h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                            {/* <a href="index.html" className="active">Home</a> */}
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                            {/* <a href="services.html">About Us</a> */}
                        </li>

                        <li className="dropdown"><a href="#"><span>Programs</span><i className="bi bi-chevron-down"/></a>
                            <ul>
                                <li>
                                    <a href="#">Cub Scouts</a>
                                </li>
                                <li>
                                    <a href="#">Scouts</a>
                                </li>
                                <li>
                                    <a href="#">Venturer Scouts</a>
                                </li>
                                <li>
                                    <a href="#">Rover Scouts</a>
                                </li>
                                {/* <li>
                                    <a href="#">Leadership Team</a>
                                </li> */}
                                {/* <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>

                        <li>
                            <Link to="/faq">FAQ</Link>
                            {/* <a href="pricing.html">FAQ</a> */}
                        </li>
                        <li className="dropdown"><a href="#"><span>Resoucers</span><i className="bi bi-chevron-down"/></a>
                            <ul>
                                <li>
                                    <a href="about.html">Email Login</a>
                                </li>
                                <li>
                                    <a href="team.html">myScouts</a>
                                </li>
                                <li>
                                    <a href="testimonials.html">Thank a Scouter</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to='contact'>Contact Us</Link>
                            {/* <a href="contact.html">Contact Us</a> */}
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"/>
                </nav>

                <div className="header-social-links d-flex">
                    <a href="#" className="facebook"><i className="bu bi-facebook"/></a>
                    <a href="#" className="twitter"><i className="bu bi-twitter"/></a>
                    <a href="#" className="instagram"><i className="bu bi-instagram"/></a>
                    {/* <a href="#" className="flickr"><i className="bu bxl-flickr-square"/></a> */}
                </div>
            </div>
        </header>
    );
}

export default Header;