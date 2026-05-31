import React from 'react'
import { Link } from 'react-router-dom';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className='container p-2'>
            <div className='row mt-5 mb-5'>
                <div className='col-6'>
                    <img src={imageURL} alt='kiteImage'></img>
                </div>
                <div className='col-6 mt-5'>
                    <h1>{productName}</h1>
                    <p className='text-muted '>{productDescription}</p>
                    <div className='mt-3 mb-3 '>
                        <Link style={{textDecoration:"none"}} to={tryDemo || '/product'}>tryDemo <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                        <Link style={{textDecoration:"none"}} className='mx-4' to={learnMore || '/product'}>learnMore <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                    </div>

                    <div>
                        <Link to={googlePlay || '/product'}><img src='\.\images\googlePlayBadge.svg' alt='Google Play Badge'/></Link>
                        <Link to={appStore || '/product'} className='mx-3'><img src='\.\images\appstoreBadge.svg' alt='App Store Badge'/></Link>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default LeftSection;