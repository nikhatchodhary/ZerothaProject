import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid " id='supportHero'>
            <div className='p-5'  id='supportWrapper'>
                <h4>Support portal</h4>
                <a  href='' >Track Tickets</a>
            </div>
            <div className='row p-3 m-5 ' id='styleHero'>
                <div className="col-6 ">
                    <h1 className='heading fs-4 mb-4 '>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O'/>
                    <br/>
                    <div className="ancher">
                        <a href=''>Track account opening</a>
                        <a href=''>Track Segment activation</a>
                        <a href=''>Intraday margins</a>
                        <a href=''>Kite user manual</a>
                    </div>
                   
                </div>
                <div className="col-6 " id='columnHero'>
                     <h1 className='fs-5'>Featured</h1>
                     
                     <ol>
                        <li><a href=''>Current Takeovers and Delisting-January 2024</a></li>
                        <li><a href=''>Latest Intraday leverages-MIS & CO</a></li>
                     </ol>
                 
                </div>
            </div>
        </section>
     );
}

export default Hero;