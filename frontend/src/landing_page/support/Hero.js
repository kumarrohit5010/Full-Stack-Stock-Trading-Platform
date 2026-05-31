import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div style={{backgroundColor:"rgb(56,126,209)"}}>
        <div className="container">
            <div className="row clrwhite mb-5">
                <div className="col-12 col-lg-1"></div>
                <div className="col-12 col-lg-5 mx-lg-5 newmargin support-hero-main">
                    <h3 className="mb-5 mt-5 fs-5" style={{opacity:"0.85"}}>Support Portal</h3>
                    <h4 style={{opacity:"0.85"}} className="mb-3 support-hero-title">Search for an answer or browse help topics<br/> to create a ticket</h4>
                    <input className="support-search" placeholder="Eg: How do i activate F&O, why is my order getting rejected."></input>
                    <p><Link className="clrwhite" to="#">Track Account Opening</Link>
                    <Link className="clrwhite" to="#">Track segment activation</Link>
                    <Link className="clrwhite" to="#">Intraday</Link><br/>
                    <Link className="clrwhite" to="#">Margin</Link>
                    <Link className="clrwhite" to="#">Kite User Manual</Link></p>
                </div>
                <div className="col-12 col-lg mt-5 mb-5 support-hero-side" style={{textAlign:"right",opacity:"0.85",color:"white"}}>
                    <Link className="clrwhiteh" to="">Track Ticket</Link>
                    <div className="my-5" style={{textAlign:"left"}}>
                        <h4>Featured</h4>
                        <ol>
                            <li><Link className="clrwhiteh" style={{lineHeight:"2.5"}} to="">Current TakeOvers and Delisting - January 2024</Link></li>
                            <li><Link className="clrwhiteh" to="">Latest Intraday leverages - MIS & CO</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Hero;