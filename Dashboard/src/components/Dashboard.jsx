import React from 'react';
import WatchList from './WatchList';
import Summary from './Summary';
import Holdings from './Holdings';
import Funds from './Funds';
import Positions from './Positions';
import Orders from './Orders'
import { Routes,Route } from 'react-router-dom';
import { GeneralContextProvider } from './GeneralContext';
function Dashboard({username}) {
    return ( 
        <div className="dashboard-container">
            <GeneralContextProvider>
                 <WatchList/>
            </GeneralContextProvider>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Summary username={username}/>}/>
                    <Route exact path="/orders" element={<Orders/>}/>
                    <Route exact path="/holdings" element={<Holdings/>}/>
                    <Route exact path="/positions" element={<Positions/>}/>
                    <Route exact path="/funds" element={<Funds/>}/>
                    
                </Routes>
            </div>
        </div>
     );
}

export default Dashboard;