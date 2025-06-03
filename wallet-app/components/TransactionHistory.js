import React from 'react';

const TransactionHistory = ({ transactions }) => {
    return (
        <div className="transaction-history">
            <h2>Transaction History</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <span>Date: {transaction.date}</span>
                        <span>Amount: {transaction.amount} BTC</span>
                        <span>Type: {transaction.type}</span>
                        <span>Status: {transaction.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionHistory;