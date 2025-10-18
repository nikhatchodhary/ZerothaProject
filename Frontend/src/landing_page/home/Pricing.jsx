import React from 'react';
function Pricing(){
    return (
        <div className="container my-5">
          <div className="row">
            <div className="col-4">
              <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
              <p>We pioneered the concept of discount broking and price transpancy in india .flat fees and no charges </p>
                <a href=''  style={{textDecoration:"none"}}>See pricing<i className="fa fa-long-arrow-right" aria-hidden="true" ></i></a>

            </div>
            <div className="col-2"></div>
            <div className="col-6">
              <div className="row">
                <div className="col text-center border p-3">
                  <h1 className='mb-3'>&#8377;0</h1>
                  <p>Free equality and delivery <br/>direct mutual funds</p>
                </div>
              <div className="col text-center border p-3">
                <h1 className='mb-3'>&#8377;20</h1>
                <p>Intraday and F&O </p>
              </div>
              </div>
            </div>
          </div>
         
        </div>
      );
}

export default Pricing;