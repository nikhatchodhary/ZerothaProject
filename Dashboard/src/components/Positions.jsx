import React,{useState,useEffect} from 'react';

import axios from 'axios';
function Positions() {
    const [allPositions,setAllPositions]=useState([]);
    useEffect(()=>{
        axios.get("https://zerotha-backend-1le6.onrender.com/allPositions").then((res)=>{
            console.log(res.data);
            setAllPositions(res.data);
        });
    },[]);
    return (  
        <>
        <div className="position-container mt-5">
            <h3 className='title '>Positions({allPositions.length})</h3>
            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>instrument</th>
                        <th>Qty</th>
                        <th>Avg</th>
                        <th>LTP</th>
                        <th>P&L</th>
                        <th>Chg</th>
                    </tr>
                        
                        {allPositions.map((stock,index)=>{
                          const  curValue=stock.price*stock.qty;
                          const isProfit=curValue-stock.avg*stock.qty>=0.0;
                          const profitClass=isProfit?"profit":"loss";

                          return(
                            <tr key={index}>
                                <td>{stock.product}</td>
                                 <td>{stock.name}</td>
                                  <td>{stock.qty}</td>
                                   <td>{stock.avg}</td>
                                    <td>{stock.price}</td>
                                    <td className={profitClass}>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                                     <td className={profitClass}>{stock.day}</td>
                                
                             </tr>
                          )
                        })}
                        
                  
                </table>
            </div>
        </div>
        
        
        </>
        

    );
}

export default Positions;