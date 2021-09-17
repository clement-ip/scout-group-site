import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

function Programs(){
    useEffect(() => { 
        document.title = "Programs - 69th Knights of Kensington Scout Group"; 
    },[]);

    return(
        <div>
            <Breadcrumbs section="Programs"/>

            <section id="programs" className="programs">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        {/* <h2>Programs</h2> */}
                        <p>We offer the following programs, and each of our sections were awarded with the Council Commissioner's Quality Award, for providing a quality program to the youth.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="box cubs">
                                <h3>Cub Scouts</h3>
                                {/* <h4><sup>$</sup>0<span> / month</span></h4> */}
                                <p><b>Ages 8-10</b></p>
                                <p style={{textAlign:'left'}}>
                                    In Cubs, our weekly meetings generally include games, crafts, activities, badge work and a learning portion in which the youth learn how to properly prepare themselves for any situations.
                                </p>
                                <p style={{textAlign:'left'}}>
                                    We aim to have an outing once per month, and 3 overnight camping trips per Scouting Year. All our outings and camps will largely relate to the topic of discussion during the month's meetings. Whether it be a fire hall visit, a skating trip, a sleepover or a camp, our leaders and youth enjoy the program immensely.
                                </p>
                                {/* <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li className="na">Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul> */}
                                <div className="btn-wrap">
                                    {/* <Link to="/programs/cubs" className="btn-buy">Learn More</Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                            <div className="box scouts">
                                <h3>Scouts</h3>
                                {/* <h4><sup>$</sup>19<span> / month</span></h4> */}
                                <p><b>Ages 11-14</b></p>
                                <p style={{textAlign:'left'}}>
                                    In Scouts, we live by the motto of "Be Prepared". This means during our regular meetings, we spend most of time preparing the Scouts for different scenarios that may occur at our upcoming events (such as winter camping in the snow.
                                </p> 
                                <p style={{textAlign:'left'}}>
                                    We, as leaders, would not feel confident in taking the youth out to a camp unless we are certain they are well versed in handling any situations that may arise. This allows the Scouts to mature, and become independent individuals that can take care of themselves, as well as their peers.
                                </p>
                                {/* <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul> */}
                                <div className="btn-wrap">
                                    {/* <Link to="/programs/scouts" className="btn-buy">Learn More</Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="box venturers">
                                <h3>Venturer Scouts</h3>
                                <p><b>Ages 15-17</b></p>
                                <p style={{textAlign:'left'}}>
                                    In Venturers, we challenge ourselves in many different ways. We learn more about being independent and responsible individuals that are able to provide for not only ourselves, but for our peers as well. 
                                </p> 
                                <p style={{textAlign:'left'}}>
                                    We plan our own outings (such as White Water Rafting, Expedition Camps, Kayaking Trips, etc.) and strive towards both the Queen's Venturer Award, and the Duke of Edinburgh's Awards. This section requires a high level of commitment, but in return, the satisfaction is even greater.
                                </p>
                                {/* <h4><sup>$</sup>29<span> / month</span></h4> */}
                                {/* <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul> */}
                                <div className="btn-wrap">
                                    {/* <Link to="/programs/venturers" className="btn-buy">Learn More</Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="box rovers">
                                {/* <span className="advanced">Advanced</span> */}
                                <h3>Rover Scouts</h3>
                                <p><b>Ages 18-26</b></p>
                                <p style={{textAlign:'left'}}>
                                    In Rovers, we offer the widest range of activities and adventures extending beyond all borders. Often times, members  becomes volunteer Scouters for the younger Sections such as Cubs and Scouts. 
                                </p> 
                                <p style={{textAlign:'left'}}>
                                    When we are not helping out with a Section, our activities include large scale expeditions through a variety of transportation methods (bike, hike, kayak), to just getting together for dinner. Under the guidance of advisors, Rovers is about developing new skills, friendships and attitudes while giving back to the community. 
                                </p>
                                {/* <h4><sup>$</sup>49<span> / month</span></h4> */}
                                {/* <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul> */}
                                <div className="btn-wrap">
                                    {/* <Link to="/programs/rovers" className="btn-buy">Learn More</Link> */}
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