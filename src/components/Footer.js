import React from 'react';

function Footer(){
    const getCurrentYear = () => {
        return new Date().getFullYear();  
    };
    
    return(
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>69th Knights of Kensington Scout Group</h3>
                            {/* <h4>69th Knights of Kensington Scout Group</h4> */}
                            {/* <p>
                                5175 Dumfries St.<br/>
                                Vancouver, BC V5P 3A2<br/>
                                Canada
                            </p> */}
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"/> 
                                    <a href="https://myscouts.ca/">myScouts</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"/> 
                                    <a href="https://www.scouts.ca/join/">Join Scouts</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"/> 
                                    <a href="https://scoutshop.ca/">Scout Shop</a>
                                </li>
                                {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Scouts Canada Links</h4>
                            <ul>
                                {/* <li><i className="bx bx-chevron-right"></i> <a href="#">myScouts Registration Instructions</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">No One Left Behind (NOLB)</a></li> */}
                                <li>
                                    <i className="bx bx-chevron-right"/> 
                                    <a href="https://www.scouts.ca/">Official Website</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"/> 
                                    <a href="http://wiki.scouts.ca/en/Main_Page">Wiki</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"/> 
                                    <a href="https://help.scouts.ca/hc/en-ca/requests/new">Help Centre Ticket Request</a>
                                </li>
                                {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li> */}
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-details">
                            <h4>Scouts Canada Charity Number: 107761694RR0028</h4>
                            <p>
                                East Vancouver Area | Pacific Coast Council
                            </p>
                            {/* <form action="" method="post">
                                <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        <strong><span>&copy; {getCurrentYear()} 69th Knights of Kensington</span></strong>. All Rights Reserved.
                    </div>
                    <div className="credits">
                        Designed by...
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href={process.env.REACT_APP_FACEBOOK_URL} className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-facebook"/>
                    </a>
                    <a href={process.env.REACT_APP_INSTAGRAM_URL} className="instagram" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-instagram"/>
                    </a>
                    <a href={process.env.REACT_APP_TWITTER_URL} className="twitter" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-twitter"/>
                    </a>
                    <a href={process.env.REACT_APP_FLICKR_URL} className="flickr" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-flickr-square"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;