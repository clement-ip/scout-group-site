import React, { useEffect } from 'react';
import Breadcrumbs from './Breadcrumbs';

function About(props){
    useEffect(() => { 
        document.title = "About Us - 69th Scout Group"; 
    },[]);

    return(
        <div>
            <Breadcrumbs section="About Us"/>

            <section id="about-us" className="about-us section-bg">
                <div className="container text-center" data-aos="fade-up">
                    <h3>
                        Established in 2003, the 69th Knights of Kensington Scout Group has served the community by providing weekly activities to youth predominately between the ages of 8 to 14.
                    </h3>
                    <h3> 
                        We are one of the fastest growing Scout Groups across the country, as we specialize in reaching out to new immigrants, while helping them integrate with the Canadian culture through the Scouting program.
                    </h3>
                    {/* <p>
                        The Scouters/Leaders in each Section are carefully selected and trained to ensure a high quality program delivery. 
                    </p> */}
                    {/* <div className="row content">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h2>Eum ipsam laborum deleniti velitena</h2>
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <ul>
                                <li>
                                    <i className="ri-check-double-line"/> Ullamco laboris nisi ut aliquip ex ea commodo consequa
                                </li>
                                <li>
                                    <i className="ri-check-double-line"/> Duis aute irure dolor in reprehenderit in voluptate velit
                                </li>
                                <li>
                                    <i className="ri-check-double-line"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                </li>
                            </ul>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>

            <section id="beginnings">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Our Beginnings</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>
                    <p>
                        Originally led only by members of the Pacific Coast Council and East Vancouver Area Service Teams, the 69th Knights of Kensington Scout Group commenced its inaugural year in August 2003. Meeting at the Kensington Community Centre (KCC) in Vancouver, it received tremendous support from the local community, especially from the nearby Lord Selkirk Elementary School. 
                    </p>
                    <p>
                        Initially, this parent-sponsored Scout Group initially consisted only of a Wolf Cub Pack. However, the younger siblings of those parents who were below the age requirement of Cubs began to show an interest in the program. On top of that, an advertising error by KCC led us to recruit some children below the typical Cub age. Seeing an influx of younger children registering for our program, a Beaver Colony was started to meet this demand. 
                    </p>
                    <p>
                        As youth members began participating in outdoor activities, excitement for the Scouting program grew in the community. Membership numbers increased dramatically, which led the leaders to begin recruiting additional Scouters to continue building the program.
                    </p>
                    <p>
                        Seeing that most registrations were from children of older ages, changes had to be made. We disbanded the Colony and focused available resources on the Cub Pack. Additionally, in September 2004, the Scout Troop was formed to take in those who were just over the age of Cubs.
                    </p>
                    <p>
                        The quality activities delivered every week and high membership numbers demonstrates that this Scout Group is a strong and energetic force in the Scouting community. The concept of diversity continues to be a driving factor for us, and the mosaic of cultural backgrounds found present on weekly basis is reflective of Vancouver's vastly rich multicultural society. 
                    </p>
                    <p>
                        With a young and open-minded leadership team, we have succeeded in creating a thriving learning environment. The valuable education that participating youth receive, along with the stories, games, crafts, and badges of the Scouting program, ensures that all members have an enjoyable time every weekend when they get together.
                    </p>
                    <div className="section-title mt-5">
                        <h3>Our Crest</h3>
                    </div>
                    <div className="row content">
                        <div className="col-lg-3" data-aos="fade-right" >
                            <div className="text-center">
                                <img src="assets/img/logos/histLogo.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-9 pt-4 pt-lg-0" data-aos="fade-left">
                            <p>
                                The official 69th Knights of Kensington Group Crest was designed and created by Joe Quibuyen, Brian Cheng, and Clement Cheng.
                            </p>
                            <p>
                                The <b>shield</b> represents our determination in defending our virtues, beliefs, and standards. On it is a symbol of the patron saint of England and Scouting: <b>St. George’s Cross</b>. On top of the cross, we find <b>King’s Arthur <i>Excalibur</i></b> encircled by his crown. These items stand for justice, nobility, and fortitude.
                            </p>
                            <p>
                                Within one section of the shield is the Group mascot, the <b>fox</b>, which symbolizes diplomacy, freedom, adaptability, and keenness. 
                            </p>
                            <p>
                                Other symbols depict Lord Baden-Powell’s <b>fleur-de-lis</b>, the <b>flag of British Columbia</b>, and the <b>Canadian Maple Leaf</b>.
                            </p>
                            <p>
                                Our motto, <i>Fortitudo</i>, is Latin for <b>“fortitude”</b> or <b>“strength”</b>. It is often defined as a train that enables a person to encounter danger, bear pain, or face adversity with courage. This motto reflects the determination and dedication of the member of this group to set high goals and achieve them despite obstacles that may stand in their way.
                            </p>
                            {/* <ul>
                                <li>
                                    <i className="ri-check-double-line"/> Ullamco laboris nisi ut aliquip ex ea commodo consequa
                                </li>
                                <li>
                                    <i className="ri-check-double-line"/> Duis aute irure dolor in reprehenderit in voluptate velit
                                </li>
                                <li>
                                    <i className="ri-check-double-line"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                </li>
                            </ul>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p> */}
                        </div>
                    </div>
                    {/* <div className="row">

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up">
                                <div className="member-img">
                                    <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
                                    <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
                                    <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                <div className="member-img">
                                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
                                    <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                <div className="member-img">
                                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
                                    <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default About;