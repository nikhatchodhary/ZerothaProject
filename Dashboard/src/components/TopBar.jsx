import React from 'react';
import Menu from './Menu';
function TopBar({Logout,username}) {
    return ( 
        <div className="topbar-container ">
            <div className="indeces-container mt-2">
                <div className="nifty ">
                    <p className='index  fs-small ml-3'>NIFTY 50</p>
                    <p className='index-points me-2 fs-small'>100.2</p>
                </div>
            <div className="sensex">
                <p  className='index '>SENSEX</p>
                <p className='index-points '>100.2</p>
            </div>
        </div>
        <Menu Logout={Logout} username={username}/>
        </div>
     );
}

export default TopBar;