import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        
        <div className='container p-4 p-md-5 mb-5'>
            <div className='row text-center'>
                <img src='./images/homeHero.png' alt='heroImage' className='m-3 m-md-5 hero-image'/>
                <h1 className='mt-2 hero-title'>Invest In Everything</h1>
                <p>Online platform to invest in stocks,derivatives,mutual funds and many more.</p>
                <Link className='btn btn-primary p-2 fs-5 hero-action-btn' style={{ textDecoration: "none" }} to="/signup">Signup Now</Link>
            </div>
             
        </div>
     );
}

export default Hero;
