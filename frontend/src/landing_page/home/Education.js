import React from 'react'
import { Link } from 'react-router-dom';

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='./images/Education.svg' alt='img' style={{width:"85%"}}></img>
                </div>
                <div className='col-6 mt-3'>
                    <h1>Free And Open Market Education.</h1>
                    <p className='mt-5'>
                        Versity,the largest online stock market education book in the world covering Everything from the basic to advanced trading.
                    </p>
                        <Link to='https://zerodha.com/varsity/' style={{textDecoration:"none"}}>Varsity<i class="fa fa-arrow-right" aria-hidden="true"></i></Link>

                    <p className='mt-5'>
                        Trading Q&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                        <Link to='https://tradingqna.com/' style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
     );
}

export default Education;
