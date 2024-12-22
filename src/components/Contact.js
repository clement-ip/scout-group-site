import React, { useEffect } from 'react';
import Breadcrumbs from './Breadcrumbs';

function Contact(){
    useEffect(() => { 
        document.title = "Contact Us - 69th Knights of Kensington Scout Group"; 
    },[]);

    return(
        <div>
            <Breadcrumbs section="Contact Us"/>
            <section id="contact" className="contact">
                <div className="container">                 
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-4">
                            <div className="info-wrap">
                                <div className="row">
                                    <div className="info">
                                        <a href="https://goo.gl/maps/DzKkY254uyNErJUQ6" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-geo-alt"/>
                                        </a>
                                        <h4>Location:</h4>
                                        <b><p>Kensington Community Centre</p></b>
                                        <p>5175 Dumfries St.<br/>Vancouver, BC V5P 3A2</p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map-section">
                <iframe style={{border:'0', width: '100%', height: '550px'}} 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.056663980962!2d-123.07699488371385!3d49.2374148818971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486741c71f59853%3A0xa4034848e5f6a36!2sKensington%20Community%20Centre!5e0!3m2!1sen!2sca!4v1633232193334!5m2!1sen!2sca" 
                    title = "KCC"
                    // frameBorder="0" 
                    allowFullScreen/>
            </div>

            <section id="contact" className="contact">
                <div className="container">
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-20">
                            <div className="info-wrap">
                                <div className="row">
                                    {/* <div className="col-lg-4 info">
                                        <i className="bi bi-clock"/>
                                        <h4>Meeting Time:</h4>
                                        <p>Sundays, 2-4pm (unless otherwise notified)</p>
                                    </div> */}
                                
                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <a href={process.env.REACT_APP_EMAIL_URL} target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-envelope" />
                                        </a>
                                        <h4>Email:</h4>
                                        <p>info[at]69scouts.org</p>
                                    </div>

                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <a href={process.env.REACT_APP_FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-facebook"/>
                                        </a>
                                        <h4>Facebook:</h4>
                                        <p>www.facebook.com/KOKScouts</p>
                                    </div>

                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <a href={process.env.REACT_APP_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-instagram"/>
                                        </a>
                                        <h4>Instagram:</h4>
                                        <p>www.instagram.com/69scouts</p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            {/* <div className="info-wrap">
                                <div className="row">
                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <a href={process.env.REACT_APP_FLICKR_URL} target="_blank" rel="noopener noreferrer">
                                            <i className= "bx bxl-flickr-square" />
                                        </a>
                                        <h4>Flickr:</h4>
                                        <p>www.flickr.com/photos/69scouts/albums</p>
                                    </div>

                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <a href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-twitter" />
                                        </a>
                                        <h4>Twitter:</h4>
                                        <p>twitter.com/69scouts</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                
                {/* <div className="row mt-5 justify-content-center" data-aos="fade-up">
                    <div className="col-lg-10">
                        <form action="" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required/>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div> */}
                </div>
            </section>
        </div>
    );
}

export default Contact;