import React from 'react'
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
        <div className='container text-center'>
            <div className='row mt-5'>
                <h1 className='fs-4 mt-5 mb-5'>Want to know more about our technology stack? Check out the <Link style={{textDecoration:"none"}} to='/product'>Zerodha.tech</Link> blog.</h1>
                <h3 className='mt-5 text-muted'>The Zerodha Universe</h3>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <Link style={{textDecoration:"none",color:"black"}} to='/product'>
                        <img className="mb-3" style={{width:"45%"}} src='.\images\zerodhaFundhouse.png' alt='Zerodha Fund House'/>
                        <p className='text-muted'>Our asset management venture<br/> that is creating simple and transparent index<br/> funds to help you save for your goals.</p>
                    </Link>
                    <Link style={{textDecoration:"none",color:"black"}} to='/product'>
                        <img className="mt-5 mb-3" style={{width:"45%"}} src='.\images\streaklogo.png' alt='Zerodha Fund House'/>
                        <p className='text-muted'>Systematic trading platform<br/> that allow you to create and backtest<br/> strategies without coding.</p>
                    </Link>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <Link style={{textDecoration:"none",color:"black"}} to='/product'>
                        <img className="mb-3" style={{width:"45%"}} src='.\images\sensibullLogo.svg' alt='Sensibull Logo'/>
                        <p className='text-muted'>Options trading platforms that lets you<br/> create strategies, analyze positions, and examine<br/> data points like open interest, FII/DII, and more.</p>
                    </Link>
                    <Link style={{textDecoration:"none",color:"black"}} to='/product'>
                        <img className="mt-5 mb-3" style={{width:"45%"}} src='.\images\smallcaseLogo.png' alt='Zerodha Fund House'/>
                        <p className='text-muted'>Thematic investing platform<br/> that helps you to invest in diversified<br/> basket of stocks on ETFs.</p>
                    </Link>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <Link style={{textDecoration:"none",color:"black"}} to='/product'>
                        <img className="mb-2" style={{width:"30%"}} src='.\images\tijori.svg' alt='Tijori Logo'/>
                        <p className='text-muted'>Investment research platforms<br/> that offers detailed insight on stocks,<br/> sectors, supply chains and more.</p>
                    </Link>
                    <Link style={{textDecoration:"none",color:"black"}} to='/product'>
                        <img className="mt-5 mb-3" style={{width:"35%"}} src='.\images\dittoLogo.png' alt='Ditto Logo'/>
                        <p className='text-muted'>Personalized advice on life<br/> and health insurance. No spam<br/> and no mis-selling.</p>
                    </Link>
                </div>
                <Link className='btn btn-primary p-2 fs-5' style={{width:"25%",margin:"0 auto", textDecoration: "none"}} to="/signup">Sign up for free</Link>
            </div>
        </div>
     );
}

export default Universe;