import React from 'react';
function Universe() {
    return (  
       <div className="container mt-5">
        <div className="row text-center">
            <h2 className='mt-5 '>The Zerodha Universe</h2>
            <p className='mt-3 ' style={{fontWeight:"600,",color:"#252424ff"}}>Extend your trading and investment experience
                 even further with our partner platforms.
            </p>
            <div className="col-4 p-5">
                <img src='media\images\zerodhaFundhouse.png' style={{width:"50%"}}/>
                <p className='text-small text-muted mt-3'style={{fontSize:"13px",fontWeight:"700"}}>Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.
                </p>
                <img src='media\images\streakLogo.png' style={{width:"50%",marginTop:"30px"}}/>
                <p className='text-small text-muted mt-3'style={{fontSize:"13px",fontWeight:"700"}}>Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.
                </p>
            </div>
            <div className="col-4 p-5">
                <img src='media\images\sensibullLogo.svg' style={{width:"50%"}}/>
                <p className=' text-muted mt-4' style={{fontSize:"13px",fontWeight:"700"}}>Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                </p>
                <img src='media\images\smallcaseLogo.png' style={{width:"50%",marginTop:"30px"}}/>
                <p className=' text-muted mt-4' style={{fontSize:"13px",fontWeight:"700"}}> Thematic investing platform
                     that helps you invest in diversifiedbaskets of stocks on ETFs.</p>
            </div>
            <div className="col-4 p-5">
                <img src='media\images\goldenpiLogo.png' style={{width:"50%"}}/>
                <p className='text-small text-muted mt-3 'style={{fontSize:"13px",fontWeight:"700"}}>
                     Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                </p>
                 
                    <img src='media\images\dittoLogo.png ' style={{width:"40%",marginTop:"30px"}}/>
                    <p className='text-small text-muted mt-3  'style={{fontSize:"13px",fontWeight:"700"}}>
                    Personalized advice on lifeand health insurance. No spam and no mis-selling.   </p>
             </div>

        </div>
       </div>
    );
}

export default Universe;