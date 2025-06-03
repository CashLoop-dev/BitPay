import React, { useState } from 'react';

const Withdraw = ({ balance, onWithdraw }) => {
    const [amount, setAmount] = useState('');

    const handleWithdraw = () => {
        const withdrawAmount = parseFloat(amount);
        if (withdrawAmount > 0 && withdrawAmount <= balance) {
            onWithdraw(withdrawAmount);
            setAmount('');
        } else {
            alert('Invalid withdrawal amount');
        }
    };

    return (
        <div>
            <h2>Withdraw Funds</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to withdraw"
            />
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
};

export default Withdraw;