import React,{useState}from 'react';
function Funds() {
     const [showAddModal, setShowAddModal] = useState(false);
      const [showWithdrawModal, setShowWithdrawModal] = useState(false);
      const [amount, setAmount] = useState("");
      const [availableBalance, setAvailableBalance] = useState(10000);

    const handleAddFunds = () => {
      const amt = parseFloat(amount);
      if (!isNaN(amt) && amt > 0) {
      setAvailableBalance(availableBalance + amt);
      alert( `₹${amount} added successfully!`);
      setShowAddModal(false);
      setAmount("");
    }
    else {
      alert(" Please enter a valid amount!");
    }
  };

  const handleWithdrawFunds = () => {
     const amt = parseFloat(amount);
    if (!isNaN(amt) && amt > 0) {
      if (amt <= availableBalance) {
        setAvailableBalance(availableBalance - amt);
      alert( `₹${amount} withdrawn successfully!`);
      setShowWithdrawModal(false);
      setAmount("");
      }else {
        alert(" Insufficient balance!");
      }
    }else {
      alert(" Please enter a valid amount!");
    }
  };

    return ( 
        <>
        <div className="funds-container">
            <div className="funds-header">
                <h2>Funds</h2>
                <div className="funds-button">

                     <button className="add-fund-btn" onClick={() => setShowAddModal(true)}>
                    + Add Funds
                    </button>
                    <button className="withdraw-btn" onClick={() => setShowWithdrawModal(true)}>
                     − Withdraw
                    </button>
                </div>
            </div>
            <div className="funds-Balance">
               <h3>Available Balance:₹{availableBalance.toLocaleString()}</h3>
               <p>Used Margin:&#8377;2,000</p>
               <p>Opening Balance:&#8377;12,000</p>
            </div>

    
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Funds</h3>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="modal-actions">
              <button className="confirm-btn" onClick={handleAddFunds}>Confirm</button>
              <button className="cancel-btn" onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      
      {showWithdrawModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Withdraw Funds</h3>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="modal-actions">
              <button className="confirm-btn" onClick={handleWithdrawFunds}>Confirm</button>
              <button className="cancel-btn" onClick={() => setShowWithdrawModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
        </div>
        </>
        
     );
}

export default Funds;