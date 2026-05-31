import React from 'react'
import { Link } from 'react-router-dom';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row p-2 mb-2'>
                <div className='col-4'>
                    <h1 className='mb-3 mt-5'>Unbeatable Pricing.</h1>
                    <p>We pioneer the concept of discount broking and proce transparency in India. Flat fees and no hidden charges.</p>
                    <Link to='/pricing' style={{textDecoration:"none"}}>See Pricing<i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center mb-5 p-5'>
                        <div className='col border mb-5 p-5'>
                            <h1><i class="fa fa-inr fs-3" aria-hidden="true"></i>0</h1>
                            <p>Free equity deliver and <br/> direct mutual Funds</p>
                        </div>
                        <div className='col border mb-5 p-5'>
                            <h1><i class="fa fa-inr fs-3" aria-hidden="true"></i>120</h1>
                            <p>Intraday F&O</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;