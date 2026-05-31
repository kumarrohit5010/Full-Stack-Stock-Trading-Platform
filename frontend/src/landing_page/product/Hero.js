import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
    <div className='container text-center border-bottom p-3 mb-5'>
        <div className='row mt-5'>
            <h2>Technology</h2>
            <p className='text-muted fs-3'>
                Sleek, modern and intuitivetrading Platform.
            </p>
            <p className='fs-5 mb-5'>check out our <Link style={{textDecoration:"none"}} to='/product'>investment offering <i class="fa fa-arrow-right" aria-hidden="true"></i></Link></p>

        </div>

    </div>
     );
}

export default Hero;