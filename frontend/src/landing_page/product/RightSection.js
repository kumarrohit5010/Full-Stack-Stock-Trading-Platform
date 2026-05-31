import React from 'react'
import { Link } from 'react-router-dom';

function RightSection({productName,productDescription,LearnMore,imageUrl}) {
    return ( 
        <div className='container p-2'>
            <div className='row mt-5 mb-5'>
                <div className='col-6 mt-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='text-muted my-4'>{productDescription}</p>
                    <div className='mt-3 mb-3 '>
                        <Link style={{textDecoration:"none"}} to={LearnMore || '/product'}>LearnMore <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageUrl} alt='consoleImage'></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;