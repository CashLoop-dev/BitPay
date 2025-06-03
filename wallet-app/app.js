// app.js
const { getBalance, withdraw, deposit, sendTransaction } = require('./utils/bitcoinUtils');
const { authenticateUser, verify2FACode } = require('./utils/auth');
const SendBitcoin = require('./components/SendBitcoin');
const TransactionHistory = require('./components/TransactionHistory');
const Withdraw = require('./components/Withdraw');
const Deposit = require('./components/Deposit');
const TwoFactorAuth = require('./components/TwoFactorAuth');

let isAuthenticated = false;
let transactions = [];

// Function to handle login and password authentication
function handleLogin(password) {
    if (authenticateUser(password)) {
        isAuthenticated = true;
        loadWallet();
    } else {
        alert("Invalid password");
    }
}

// Function to load wallet after authentication
function loadWallet() {
    document.getElementById("balance-container").innerHTML = `
        <h3>Balance: ${getBalance()} BTC</h3>
    `;
    
    document.getElementById("transaction-history").innerHTML = `
        <TransactionHistory transactions={transactions} />
    `;
    
    document.getElementById("withdraw-container").innerHTML = `
        <Withdraw onWithdraw={handleWithdraw} />
    `;
    
    document.getElementById("deposit-container").innerHTML = `
        <Deposit onDeposit={handleDeposit} />
    `;
    
    document.getElementById("send-container").innerHTML = `
        <SendBitcoin onSendTransaction={handleSendTransaction} />
    `;
    
    document.getElementById("2fa-container").innerHTML = `
        <TwoFactorAuth onVerify={handle2FAVerification} />
    `;
}

// Function to handle withdraw actions
function handleWithdraw(amount) {
    if (isAuthenticated) {
        withdraw(amount);
        loadWallet();
    } else {
        alert("Please authenticate first.");
    }
}

// Function to handle deposit actions
function handleDeposit(amount) {
    if (isAuthenticated) {
        deposit(amount);
        loadWallet();
    } else {
        alert("Please authenticate first.");
    }
}

// Function to handle 2FA verification
function handle2FAVerification(code) {
    if (verify2FACode(code)) {
        alert("2FA Verified Successfully.");
    } else {
        alert("Invalid 2FA Code.");
    }
}

// Function to handle sending bitcoin
function handleSendTransaction(amount, address) {
    if (isAuthenticated) {
        return sendTransaction(amount, address);
    } else {
        alert("Please authenticate first.");
        return null;
    }
}

// Initial prompt for password authentication
let password = prompt("Enter Wallet Password to access:");
handleLogin(password);
