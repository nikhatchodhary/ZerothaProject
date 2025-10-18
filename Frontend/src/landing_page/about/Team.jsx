import React from 'react';
function Team() {
    return (
        <div className="container my-5">
            <div className="row p-5 border-top text-center">
                <h1>People</h1>
            </div>
             <div className="row text-muted">
                <div className="col-6 text-center">
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%",width:"50%"}} />
                    <h5 className='my-3' style={{color:"#3d3b3bff"}}>Nithin kamath</h5>
                    <h6>Founder,CEO</h6>
                </div>
                <div className="col-6 p-3" style={{lineHeight:"1.8"}} >
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to 
                        overcome the hurdles he faced during his decade long stint as a trader. Today, 
                        Zerodha has changed the landscape of the Indian broking industry.

                    </p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
                     the Market Data Advisory Committee (MDAC).</p>
                     <p>Playing basketball is his zen.</p>
                     <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage </a>/ <a href=''style={{textDecoration:"none"}}>TradingQnA</a> /<a href=''style={{textDecoration:"none"}}>Twitter</a> </p>
                </div>

             </div>
        </div>
       
    );
}

export default Team;