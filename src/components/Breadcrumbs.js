import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumbs(props){
    return(
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>{props.section}</h2>
                    <ol>
                        <li><Link to ="/">Home</Link></li>
                        <li>{props.section}</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumbs;