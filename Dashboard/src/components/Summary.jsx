import React from 'react';
function Summary({username}) {
    return ( 
        <>
        <div className="username">
           
            <h6 className='mt-5'>Hi,{username}</h6>
            <hr className='divider'/>
        </div>
        <div className="section">
            <span>
               <i class="fa fa-clock-o" aria-hidden="true"></i> 
                <p className='mt-3 '>Equity</p>
            </span>
        <div className="data">
            <div className="first">
                <h3>3.74k<p>Margin available </p></h3>
                
            </div>
            <hr/>  
           <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div> 
        </div>
        <hr className='divider'/>
        </div>
           <div className="section">
            <span>
               <i className="fa fa-credit-card" aria-hidden="true"></i> 
                <p className='mt-0'>Holdings(13)</p>
            </span>
        <div className="data">
            <div className="first">
                <h3 className='profit'>1.55k <small>+5.20%</small> <p>P&L</p> </h3>
               
            </div>
            <hr/>  
           <div className="second">
            <p>
             Current Value <span>31.43k</span>{" "}
            </p>
            <p>
             Investment <span>29.88k</span>{" "}
            </p>
          </div> 
        </div>
        <hr className='divider'/>
           </div>
        </>
     );
}

export default Summary;