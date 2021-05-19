import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumbs(props){
    function TitleRender(){
        if(!props.subsection){
            return(
                <div className="d-flex justify-content-between align-items-center">
                    <h2>{props.section}</h2>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>{props.section}</li>
                    </ol>
                </div>
            );
        }
        else{
            const link = props.section.toLowerCase();
            const fixedLink = `/${link}`;
            return(
                <div className="d-flex justify-content-between align-items-center">
                    <h2>{props.subsection}</h2>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={fixedLink}>{props.section}</Link></li>
                        <li>{props.subsection}</li>
                    </ol>
                </div>
            );
        }
    }

    return(
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <TitleRender/>
            </div>
        </section>
    );
}

export default Breadcrumbs;