// utils/bitcoinUtils.js
let balance = parseFloat(localStorage.getItem('balance')) || 1.23;  // Default starting balance
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

const TRANSACTION_FEE = 0.0005;  // Transaction fee per withdrawal
const FAKE_ADDRESS = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";  // Example fake Bitcoin address (sender's address)

function getBalance() {
    return balance.toFixed(8); // Return balance with 8 decimal places
}

function addTransaction(type, amount) {
    const txMessage = `${type} ${amount} BTC`;
    transactions.push(txMessage);
    localStorage.setItem('transactions', JSON.stringify(transactions));  // Store in localStorage
}

function withdraw(amount) {
    if (amount + TRANSACTION_FEE > balance) {
        alert("Insufficient funds including transaction fee.");
        return;
    }
    balance -= (amount + TRANSACTION_FEE);  // Subtract the amount and fee
    localStorage.setItem('balance', balance);  // Store balance in localStorage
    addTransaction("Withdrawn", amount);
    addTransaction("Fee", TRANSACTION_FEE);
}

function deposit(amount) {
    balance += amount;
    localStorage.setItem('balance', balance);  // Store balance in localStorage
    addTransaction("Deposited", amount);
}

function sendTransaction(amount, receiverAddress) {
    if (amount + TRANSACTION_FEE > balance) {
        alert("Insufficient funds for transaction.");
        return;
    }

    // Fake transaction process: Deduct balance, create a fake transaction receipt
    balance -= (amount + TRANSACTION_FEE);
    localStorage.setItem('balance', balance);  // Store balance in localStorage

    // Create a fake transaction receipt
    const transactionReceipt = {
        transactionId: Math.random().toString(36).substr(2, 9),  // Fake transaction ID
        amountSent: amount,
        transactionFee: TRANSACTION_FEE,
        senderAddress: FAKE_ADDRESS,
        receiverAddress: receiverAddress,
        status: "Success",
        timestamp: new Date().toISOString(),
    };

    // Add transaction receipt to localStorage for later retrieval
    localStorage.setItem('transactionReceipt', JSON.stringify(transactionReceipt));

    addTransaction("Sent", amount);
    addTransaction("Fee", TRANSACTION_FEE);

    return transactionReceipt;  // Return the transaction receipt
}

module.exports = { getBalance, addTransaction, withdraw, deposit, sendTransaction };
