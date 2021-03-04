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
                        <p>
                            5175 Dumfries St.<br/>
                            Vancouver, BC V5P 3A2
                            {/* United States <br/><br/>
                            <strong>Phone:</strong> +1 5589 55488 55<br/>
                            <strong>Email:</strong> info@example.com<br/> */}
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        {/* <h4>Useful Links</h4> */}
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Registration Instructions</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">No One Left Behind (NOLB)</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">FAQ</a></li>
                        {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        {/* <h4>Our Services</h4> */}
                        <ul>
                        {/* <li><i className="bx bx-chevron-right"></i> <a href="#">myScouts Registration Instructions</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">No One Left Behind (NOLB)</a></li> */}
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Scouts Canada Website</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Scouts Canada Wiki</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Scouts Canada Help Centre</a></li>
                        {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li> */}
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-newsletter">
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
                    {/* &copy; Copyright <strong><span>Company</span></strong>. All Rights Reserved */}
                    <strong><span>&copy; {getCurrentYear()} 69th Knights of Kensington</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by...
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;