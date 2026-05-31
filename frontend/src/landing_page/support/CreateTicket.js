import React from 'react'
import { Link } from 'react-router-dom';

function CreateTicket() {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5">
                <h2 className="mb-5 fs-3 mx-5 support-ticket-title">To create a ticket, Select a relevant topic</h2>
                <div className="col-12 col-md-6 col-lg-4 mt-5 ticket">
                    <h3 className="mb-4">Account Opening</h3>
                        <Link className="noline" to="">Online account opening</Link>
                        <br/>
                        <Link className="noline" to="">ofline account opening</Link>
                        <br/>
                        <Link className="noline" to="">Company,Partnershipand HUF Account opening</Link>
                        <br/>
                        <Link className="noline" to="">NRI account opening</Link>
                        <br/>
                        <Link className="noline" to="">Charges at Zerodha</Link>
                        <br/>
                        <Link className="noline" to="">Zerodha IDFC FIRST Bank 3-in-1 Account</Link>
                        <br/>
                        <Link className="noline" to="">Getting Started</Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-5 ticket">
                    <h3 className="mb-4">Your Zerodha Account</h3>
                        <Link className="noline" to="">Login Credentials</Link>
                        <br/>
                        <Link className="noline" to="">Account Modification and segment addition</Link>
                        <br/>
                        <Link className="noline" to="">DP ID and Bank details</Link>
                        <br/>
                        <Link className="noline" to="">Your Profile</Link>
                        <br/>
                        <Link className="noline" to="">Conversion and atransfer of Shares</Link>
                       

                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-5 ticket">
                    <h3 className="mb-4">  Your Zerodha Account</h3>
                        <Link className="noline" to="">Margin/leverage ,product and Order Types</Link>
                        <br/>
                        <Link className="noline" to="">Kite Web and Mobile</Link>
                        <br/>
                        <Link className="noline" to="">Trading FAQs</Link>
                        <br/>
                        <Link className="noline" to="">Corporate Actions</Link>
                        <br/>
                        <Link className="noline" to="">sentinel </Link>
                        <br/>
                        <Link className="noline" to="">Kite API</Link>
                        <br/>
                        <Link className="noline" to="">PI and Other Platforms</Link>
                        <br/>
                         <Link className="noline" to="">stockReports+</Link>
                        <br/>
                        <Link className="noline" to="">GIT</Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4  mt-5 ticket">
                    <h3 className="mb-4">Funds</h3>
                        <Link className="noline" to="">Adding Funds</Link>
                        <br/>
                        <Link className="noline" to="">Fund Withdrawl</Link>
                        <br/>
                        <Link className="noline" to="">eManndates</Link>
                        <br/>
                        <Link className="noline" to="">Adding Bank Accounts</Link>
                        
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-5 ticket">
                    <h3 className="mb-4">Console</h3>
                        <Link className="noline" to="">Reports</Link>
                        <br/>
                        <Link className="noline" to="">Ledger</Link>
                        <br/>
                        <Link className="noline" to="">Portfolio</Link>
                        <br/>
                        <Link className="noline" to="">
                            60 Days Challenge
                        </Link>
                        <br/>
                        <Link className="noline" to="">IPQ</Link>
                        <br/>
                        <Link className="noline" to="">Referal Program</Link>
                        <br/>
                        
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-5 ticket">
                    <h3 className="mb-4">Coin</h3>
                        <Link className="noline" to="">Understanding Mutual Fund</Link>
                        <br/>
                        <Link className="noline" to="">About Coin</Link>
                        <br/>
                        <Link className="noline" to="">buying and selling</Link>
                        <br/>
                        <Link className="noline" to="">Starting an SIP</Link>
                        <br/>
                        <Link className="noline" to="">Managing your portfolio</Link>
                        <br/>
                        <Link className="noline" to="">Coin App</Link>
                        <br/>
                        <Link className="noline" to="">Moving to Coin</Link>
                </div>
            </div>
        </div>
     );
 }
 
export default CreateTicket;