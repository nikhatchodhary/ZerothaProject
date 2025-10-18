import React from 'react';

function Stats(){
    return ( 
        <div className='container p-3'> 
            <div className="row">
                <div className="col-6 p-5">
                    <h1 className='fs- mb-5'>Trust with confindence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 13+ crore customers trust Zerotha with &#8377;3.5+<br/>
                     lakh crores worth of equality investments</p>
                     <h2 className='fs-4'>No spam or gimmicks</h2>
                     <p className='text-muted'>No gimmicks, spam,"gamification",or annoying push<br/>
                     notifications.High quality apps that you use at your pace,<br/>the way you like.
                     </p>
                     <h2 className='fs-4'>The Zerotha universe</h2>
                     <p className='text-muted'>Not just an app ,but a whole ecosystem.Our investments in<br/>
                     30+ fintech startups offer you tailored services specific to your needs
                     </p>
                     <h2 className='fs-4'>Do better with money</h2>
                     <p className='text-muted'>With initiates like Nudge and Kill Switch,we don't just<br/>
                     facilities transactions,but activity help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src='media/images/ecosystem.png' alt='ecosystem' style={{width:"95%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i className="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite Demo<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;