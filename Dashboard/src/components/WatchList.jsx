import React,{useState,useContext} from 'react';
import {watchlist} from '../data/data';
import {Tooltip,Grow} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BuyActionWindow from './BuyActionWindow';
import GeneralContext from './GeneralContext';
import { DoughnutCharts} from './DoughnoutCharts';

const labels=watchlist.map((subArray)=>subArray["name"]);

function WatchList() {

    const data={
        labels,
         datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86,0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
    }
    return ( 
       <div className="watchlist-container">
            <div className="search-container">
                <input placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx" type='text' name='search ' className='search '/>
                <div className="counts">{watchlist.length}/10</div>
            </div>
            <ul className='list' >
                {watchlist.map((stock,index)=>{
                return  <WatchListItem stock={stock} key={index}/>;
                })}
            </ul>
            <DoughnutCharts data={data}/>
       </div>
     );
}

export default WatchList;

const WatchListItem=({stock})=>{
    const [showWatchlistActions,setShowWatchlistActions]=useState(false);

    const handleMouseEnter=(e)=>{
        setShowWatchlistActions(true);
    }

    const handleMouseLeave=(e)=>{
        setShowWatchlistActions(false);
    }
 
    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           <div className='item'>
                <p className={stock.isDown?"down":"up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown?(
                        <KeyboardArrowDownIcon className="down"/>
                    ):<KeyboardArrowUpIcon className="up"/>}
                    <span className='price'>{stock.price}</span>
                </div>
            </div> 
            {showWatchlistActions && <WatchListActions uid={stock.name}/>}
        </li>
    )
};



const WatchListActions=({uid})=>{
     const generalContext = useContext(GeneralContext);
     const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  const handleSellClick=()=>{
        generalContext.openSellWindow(uid);
    }
    return (
        <span className='actions'>
            <span>
                <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow} onClick={handleBuyClick}>
                    <button className='buy'>Buy</button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement='top' arrow TransitionComponent={Grow} onClick={handleSellClick}>
                    <button className='sell'>Sell</button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement='top' arrow TransitionComponent={Grow}>
                  <button className='action'> <BarChartOutlinedIcon className="icon"/></button> 
                </Tooltip>
                <Tooltip title="More  " placement='top' arrow TransitionComponent={Grow}>
                    <button className='action'><MoreHorizIcon className="icon" /></button>
                </Tooltip>
            </span>
        </span>
       
    )
}