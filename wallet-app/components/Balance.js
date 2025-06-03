import React, { useEffect, useState } from 'react';
import { getBalance } from '../utils/bitcoinUtils';

const Balance = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            const currentBalance = await getBalance();
            setBalance(currentBalance);
        };

        fetchBalance();
    }, []);

    return (
        <div className="balance">
            <h2>Current Wallet Balance</h2>
            <p>{balance} BTC</p>
        </div>
    );
};

export default Balance;