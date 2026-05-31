import React from 'react'
function Hero() {
    return (  
        <div className='container '>
            <div className='row border-bottom text-center mt-5 mb-5 p-3 '>
                <h3>Charges</h3>
                <p className='text-muted fs-5 mt-2 mb-5 '>List of all charges and taxes</p>

                <div className='mt-5 row'>
                    <div className='col-4 '>
                    <img src='.\images\pricing0.svg' style={{width:"65%"}} alt='price0'/>
                    <h3 className='text-muted p-4'>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                      <img src='.\images\pricing20.svg' style={{width:"65%"}} alt='price20'/>
                    <h3 className='text-muted p-4'>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat <br/> ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src='.\images\pricing0.svg' style={{width:"65%"}} alt='price0'/>
                    <h3  className='text-muted p-4'>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;