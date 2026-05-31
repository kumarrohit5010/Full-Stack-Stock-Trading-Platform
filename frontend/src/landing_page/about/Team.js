import React from 'react'
import { Link } from "react-router-dom";

function Team() {
    return ( 
<div className='container'>
            <div className='row text-center border-top p-5 mt-5 mb-5' >
                <h1>People</h1>
            </div>
            <div className='row fs-6' style={{lineHeight:"1.8",fontSize:"1.5"}}>
                <div className='col-6 text-center'>
                    <img src='images/nithinKamath.jpg' style={{borderRadius:"100%",width:"55%"}} alt="nithinKamath"></img>
                    <h4 className='text-muted mt-3'>Nithin Kamath</h4>
                    <h6 className='text-muted'>Founder, CEO</h6>
                </div>
                <div className='col-6 mt-5 p-5 text-muted'>
                    <p>
                        Nithin Bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking Industry. 
                    </p>
                    <p>
                        He is the member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <Link to='' style={{textDecoration:"none"}}>Homepage</Link> / <Link to='' style={{textDecoration:"none"}}>TradingQnA</Link> / <Link to='' style={{textDecoration:"none"}}>Twitter</Link>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;