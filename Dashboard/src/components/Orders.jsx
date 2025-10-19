import React, { useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Order() {
    const [allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
            axios.get("https://zerotha-backend-1le6.onrender.com/allOrders").then((res)=>{   
                setAllOrders(res.data);
            });
        },[]);
    return ( 
        // if({allOrders}===[]){
        //     <div className="orders">
        //         <div className="no-orders">
        //         <p>You haven't placed any orders today</p>
        //         <Link to="/" className='btn '>
        //          Get started
        //         </Link>
        //         </div>
        //     </div>
        // }

        <div className="order-container">
            <h3 className='title'>Orders({allOrders.length})</h3>
            <div className="order-table">
                <table>
                    <tbody>
                    <tr>
                        <th>instrument</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Mode</th>
                    </tr>

                    {allOrders.map((stock,index)=>{
                        return(
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.price}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.mode}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>

    
        
     );
}

export default Order;