import React, { useEffect } from 'react';
import Breadcrumbs from './Breadcrumbs';

function Calendar(){
    useEffect(() => { 
        document.title = "Calendar - 69th Scout Group"; 
    },[]);

    return(
        <div>
            <Breadcrumbs section="Calendar"/>
            <section id="calendar" className="contact">
                <div className="container">                 
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="info-wrap">
                            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FVancouver&src=NjlzY291dHMub3JnX2ZkYTZhNDdlYjNkN2UzOWFhZDBjZTY3MmRmNWFhZDk2M2Y3NjM1MmY4NTVlZWMyMDAzNzUwMjBmNDM3NWFlNjJAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230043a9&color=%23009688"  
                                    title = "69 SC Calendar"
                                    style={{border:"0", width:"100%", height:"905px"}}
                                    allowFullScreen/>
                            <p/>
                            Note: Events are subject to change. Please contact your Section Scouter for more information.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Calendar;