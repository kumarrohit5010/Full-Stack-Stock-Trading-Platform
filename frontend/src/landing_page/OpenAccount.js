import React from 'react'
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
       <div className='container p-4 p-md-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-2'>Open A Zerodha Account</h1>
                <p>Online platform to invest in stocks,derivatives,mutual funds and many more.</p>
                <Link className='btn btn-primary p-2 fs-5 hero-action-btn' style={{ textDecoration: "none" }} to="/signup">Sign up Now</Link>
            </div>
             
        </div>
     );
}

export default OpenAccount;