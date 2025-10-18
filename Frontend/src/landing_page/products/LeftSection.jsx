import React from 'react';
function LeftSection({imageURL,
            productName,
            productDescription,
            tryDemo,
            learnMore,googlePlay,
            appStore}
        ) {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5 mb-5">
                <div className="col-6 ">
                    <img src={imageURL} style={{width:"90%"}}/>
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-5">
                    <h2 className='fs-4 mb-3'>{productName}</h2>
                    <p>{productDescription}</p>
                    <div className='mb-3'>
                    <a href={tryDemo}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a  href={learnMore} style={{marginLeft:"30%"}}> Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore} style={{marginLeft:"20%"}}><img src='media/images/appstoreBadge.svg'/></a>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;