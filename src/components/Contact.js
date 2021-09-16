import React from 'react';
import Breadcrumbs from './Breadcrumbs';

function Contact(){
    return(
        <div>
            <Breadcrumbs section="Contact Us"/>
            
            <div className="map-section">
                {/* <iframe style="border:0; width: 100%; height: 350px;" 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" 
                    frameborder="0" 
                    allowfullscreen/> */}
            </div>

            <section id="contact" className="contact">
            <div className="container">
                
                <div className="row justify-content-center" data-aos="fade-up">
                
                <div className="col-lg-10">
                
                    <div className="info-wrap">
                        <div className="row">
                            <div className="col-lg-4 info">
                                <i className="bi bi-geo-alt"/>
                                <h4>Location:</h4>
                                {/* <p>5175 Dumfries St.<br/>Vancouver, BC V5P 3A2</p> */}
                                <p>TBD</p>
                            </div>
                        
                            <div className="col-lg-4 info mt-4 mt-lg-0">
                                <i className="bi bi-envelope"/>
                                <h4>Email:</h4>
                                <p>info[at]69scouts.org</p>
                            </div>
                        
                            <div className="col-lg-4 info mt-4 mt-lg-0">
                                <i className= "bx bxl-flickr-square"/>
                                <h4>Flickr:</h4>
                                <p>www.flickr.com/photos/69scouts/albums</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="info-wrap">
                        <div className="row">
                            <div className="col-lg-4 info">
                                <i className="bi bi-facebook"/>
                                <h4>Facebook:</h4>
                                <p>www.facebook.com/KOKScouts</p>
                            </div>
                        
                            <div className="col-lg-4 info mt-4 mt-lg-0">
                                <i className="bi bi-instagram"/>
                                <h4>Instagram:</h4>
                                <p>www.instagram.com/69scouts</p>
                            </div>

                            <div className="col-lg-4 info mt-4 mt-lg-0">
                                <i className="bi bi-twitter"/>
                                <h4>Twitter:</h4>
                                <p>twitter.com/69scouts</p>
                            </div>
                        </div>
                    </div>
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