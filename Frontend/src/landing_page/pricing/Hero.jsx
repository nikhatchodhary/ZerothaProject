import React from 'react';
function Hero() {
    return ( 
        <div className="container">
         <div className="row mt-5  mb-5 text-center p-5">
            <h2 className='fs-3'>Charges</h2>
            <p className='text-muted fs-5 mb-5' style={{fontWeight:"500"}}>List of all charges and taxes</p>
            <div className="row mt-5">
                <div className="col-4 p-3 mt-5">
                    <img src='media/images/pricingEquity.svg'/>
                    <h1 className='fs-4'>Free equity delivery</h1>
                    <p className='text-muted mt-4'style={{fontWeight:"480",fontSize:"17px",color:"rgba(124, 120, 120, 1)"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src='media/images/intradayTrades.svg'/>
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className=' mt-4' style={{fontWeight:"480",fontSize:"17px",color:"rgba(124, 120, 120, 1)"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,
                     currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src='media/images/pricing0.svg'/>
                    <h1 className='fs-4'>Free direct MF</h1>
                    <p className='text-muted mt-4' style={{fontWeight:"480",fontSize:"17px",color:"rgba(124, 120, 120, 1)"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
          
         </div>
         </div>
     );
}

export default Hero;