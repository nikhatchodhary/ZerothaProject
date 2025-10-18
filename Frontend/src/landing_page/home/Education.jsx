import React from 'react';

function  Eduction(){
    return ( 
        <div className="container  my-5 ">
          <div className="row">
            <div className="col-6">
              <img src='media/images/education.svg' style={{width:"80%"}}/> 
        </div>
           
            <div className="col-6 my-5">
                
                  <h1 className='mb-3 fs-2'>Free and open market education</h1>
                  <p>Varsity,the largest Online stock market education book in the world covering everything from the basics to advanced trading.</p>
                     <a href=''  style={{textDecoration:"none"}}>Versity<i className="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries. </p>
                <a href=''  style={{textDecoration:"none"}}>TradingQ&A<i className="fa fa-long-arrow-right" aria-hidden="true" ></i></a>

              </div>
             
          </div>
         
        </div>
     );
}

export default Eduction;