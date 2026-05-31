import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(240,240,240)"}}>
            
        <div className='container border-top mt-5 p-5'>
            <div className='row'>
                <div className='col'>
                    <img src='./images/logo.svg' alt='logo ' style={{width:"50%",marginBottom:"10px"}}></img>
                    <p className='mt-3 text-muted'>&copy;2010-2024,Not Zerodha broking ltd.</p>
                    <p className='text-muted'>All Right are Reserved.</p>
                    <div className='media'>
                      <Link to='' ><i class="fa-brands fa-twitter"></i></Link> 
                      <Link to='https://www.facebook.com/share/1KxyFW23Bc/'className='mx-2'><i class="fa-brands fa-facebook"></i></Link>
                      <Link to='https://www.instagram.com/kumarrohit9814?igsh=MTJlMTB3Z3M4dTlkcg=='className='mx-2'><i class="fa-brands fa-instagram"></i></Link>
                      <Link to='https://www.linkedin.com/in/rohit-kumar-yadav-79a9682a2?utm_source=share_via&utm_content=profile&utm_medium=member_android'className='mx-2'><i class="fa-brands fa-linkedin"></i></Link>
                      <Link to=''className='mx-2'><i class="fa-solid fa-user"></i></Link>
                    </div>

                </div>
                 <div className='col links'>
                    <p className='fs-5'>Company </p>
                    <Link to='/about'>About</Link><br/>
                    <Link to='/product'>Product</Link><br/>
                    <Link to='/pricing'>Pricing</Link><br/>
                    <Link to='/about'>Referral Programme</Link><br/>
                    <Link to='/about'>Careers</Link><br/>
                    <Link to='/product'>Zerodha.tech</Link><br/>
                    <Link to='/about'>Press and Media</Link><br/>
                    <Link to='/about'>Zerodha cares</Link><br/>

                </div>
                 <div className='col links'>
                    <p className='fs-5'>Support</p>
                          <Link to='https://contact-form-tau-sandy.vercel.app/'>Contact</Link><br/>
                    <Link to='/support' >Support Portal</Link><br/>
                    <Link to='/support'>Z-Connect vlog</Link><br/>
                    <Link to='/pricing'>List of Charges</Link><br/>
                    <Link to='/support'>Download and resources</Link><br/>

                </div>
                 <div className='col links'>
                    <p className='fs-5'>Account</p>
                    <Link to='/openAccount'>Open an Account</Link><br/>
                    <Link to='/openAccount'>Fund Transfer</Link><br/>
                    <Link to='/openAccount'>60 Days challenge</Link><br/>
                </div>

            </div>
            <div className='mt-5 fs-9 text-muted'>
                <p>A stock market monitoring application is a software tool that helps users track the performance of stocks in real time. It displays important data such as stock prices, market trends, and trading volumes. This allows investors to quickly understand how the market is moving and make better decisions.</p>

                <p className='mt-4'>The application usually provides features like watchlists, where users can add their favorite stocks and monitor them easily. It may also include alerts and notifications to inform users about sudden price changes or important market events. This helps users stay updated without constantly checking the app.</p>


                <p className='mt-4'>Another important feature is data visualization through charts and graphs. These visual tools help users analyze historical performance and identify trends over time. By understanding patterns, investors can predict possible future movements and plan their investments more effectively.</p>

                <p className='mt-4'>Overall, a stock market monitoring application makes investing simpler and more accessible. It saves time, provides accurate information, and supports better decision-making. Both beginners and experienced investors can benefit from using such applications.</p>
            </div>


        </div>
            <div className='text-center footer mb-1'>
                <Link to='/'>NSE</Link>
                <Link to='/'>BSE</Link>
                <Link to='/'>MCX</Link>
                <Link to='/'>Terms and conditions</Link>
                <Link to='/'>Policies and Procedures</Link>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>Disclosure</Link>
            </div>
        </footer>


     );
}

export default Footer;