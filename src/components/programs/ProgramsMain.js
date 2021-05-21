import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

function Programs(){
    return(
        <div>
            <Breadcrumbs section="Programs"/>

            <section id="programs" className="programs">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        {/* <h2>Programs</h2> */}
                        <p>We offer the following programs, and each of our sections were awarded with the Council Commissioner's Quality Award, for providing a quality program to the youth</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="box cubs">
                                <h3>Cub Scouts</h3>
                                {/* <h4><sup>$</sup>0<span> / month</span></h4> */}
                                <p>Ages 8-10</p>
                                {/* <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li className="na">Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul> */}
                                <div className="btn-wrap">
                                    <Link to="/programs/cubs" className="btn-buy">Learn More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                            <div className="box scouts">
                                <h3>Scouts</h3>
                                {/* <h4><sup>$</sup>19<span> / month</span></h4> */}
                                <p>Ages 11-14</p>
                                {/* <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul> */}
                                <div className="btn-wrap">
                                    <Link to="/programs/scouts" className="btn-buy">Learn More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="box venturers">
                                <h3>Venturer Scouts</h3>
                                <p>Ages 15-17</p>
                                {/* <h4><sup>$</sup>29<span> / month</span></h4> */}
                                {/* <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul> */}
                                <div className="btn-wrap">
                                    <Link to="/programs/venturers" className="btn-buy">Learn More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="box rovers">
                                {/* <span className="advanced">Advanced</span> */}
                                <h3>Rover Scouts</h3>
                                <p>Ages 18-26</p>
                                {/* <h4><sup>$</sup>49<span> / month</span></h4> */}
                                {/* <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul> */}
                                <div className="btn-wrap">
                                    <Link to="/programs/rovers" className="btn-buy">Learn More</Link>
                                    {/* <a href="#" className="btn-buy">Learn More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Programs;