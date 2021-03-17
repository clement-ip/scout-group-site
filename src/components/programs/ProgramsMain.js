import React from 'react';
import Breadcrumbs from '../Breadcrumbs';

function Programs(){
    return(
        <div>
            <Breadcrumbs section="Programs"/>

            <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">
                    {/* <div className="section-title">
                        <h2>Programs</h2>
                        <p>We offer the following programs, and each of our sections were awarded with the Council Commissioner's Quality Award, for providing a quality program to the youth</p>
                    </div> */}
                    
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="box">
                                <h3>Cub Scouts (Ages 8-10)</h3>
                                {/* <h4><sup>$</sup>0<span> / month</span></h4> */}
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li className="na">Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                            <div className="box featured">
                                <h3>Scouts (Ages 11-14)</h3>
                                {/* <h4><sup>$</sup>19<span> / month</span></h4> */}
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="box">
                                <h3>Venturer Scouts (Ages-15-17)</h3>
                                {/* <h4><sup>$</sup>29<span> / month</span></h4> */}
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="box">
                                {/* <span className="advanced">Advanced</span> */}
                                <h3>Rover Scouts (Ages 18-26)</h3>
                                {/* <h4><sup>$</sup>49<span> / month</span></h4> */}
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Learn More</a>
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