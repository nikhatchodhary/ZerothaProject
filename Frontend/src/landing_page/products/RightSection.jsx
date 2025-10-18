import React from 'react';
function RightSection({imageUrl,productName,productDescription,learnMore}) {
    return ( 
        <div className="container  p-5">
            <div className="row ">
                <div className="col-5 p-5 mt-5">
                    <h2 className='fs-4 mb-3'>{productName}</h2>
                    <p>{productDescription}</p>
                  
                    <a  href={learnMore}> Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
       
                </div>
                 <div className="col-1"></div>
                <div className="col-6">
                    <img src={imageUrl} />
                </div>
               
                
            </div>
        </div>
     );
}

export default RightSection;