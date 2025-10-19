import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const {isBuyWindowOpen,isSellWindowOpen,closeBuyWindow,closeSellWindow}=useContext(GeneralContext);

  const handleBuyClick = (e) => {
      e.preventDefault();
    axios.post("https://zerotha-backend-1le6.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    closeBuyWindow();
  };

const handleSellClick= (e)=>{
      e.preventDefault();
  axios.post("https://zerotha-backend-1le6.onrender.com/newOrder",{

    name:uid,
    qty:stockQuantity,
    price:stockPrice,
    mode:"SEll"

  });
    closeSellWindow();
};

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  const handleSellCancelClick=()=>{
    GeneralContext.closeSellWindow();
  }

  console.log("Buy",isBuyWindowOpen,"Sell:",isSellWindowOpen);

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
            {isSellWindowOpen &&(
          <Link className="btn"onClick={handleSellClick} style={{backgroundColor:"rgba(243, 129, 88, 1)"}}>
            Sell
          </Link>)}
          {isBuyWindowOpen && (
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>)}
          <Link to="" className="btn btn-grey" onClick={handleSellCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}


export default BuyActionWindow;
