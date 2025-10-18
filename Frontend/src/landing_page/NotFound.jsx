import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
        
    <div className='container p-5 my-5'>
            <div className="row text-center">
                <h2 className='fs-5'>404</h2>
                <h1 className='fs-5'> Kiaan couldn’t find that page </h1>
                <p>We couldn’t find the page you were looking for.</p>
                <p>Visit <Link to="/" style={{textDecoration:"none"}}>Zerotha's home page</Link></p>
            </div>

        </div>
      );
}

export default NotFound;