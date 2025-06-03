import React, { useState } from 'react';

const Deposit = ({ onDeposit }) => {
    const [amount, setAmount] = useState('');

    const handleDeposit = () => {
        if (amount && !isNaN(amount)) {
            onDeposit(parseFloat(amount));
            setAmount('');
        } else {
            alert('Please enter a valid amount');
        }
    };

    return (
        <div>
            <h2>Deposit Funds</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to deposit"
            />
            <button onClick={handleDeposit}>Deposit</button>
        </div>
    );
};

export default Deposit;