// components/SendBitcoin.js
const { useState } = require('react');

function SendBitcoin({ onSendTransaction }) {
    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");
    const [isTransactionSent, setIsTransactionSent] = useState(false);
    const [receipt, setReceipt] = useState(null);

    const handleSend = () => {
        if (amount <= 0 || address.trim() === "") {
            alert("Please enter a valid amount and address.");
            return;
        }

        const transactionReceipt = onSendTransaction(parseFloat(amount), address);
        if (transactionReceipt) {
            setIsTransactionSent(true);
            setReceipt(transactionReceipt);
        }
    };

    return isTransactionSent ? (
        <div className="transaction-success">
            <h3>Transaction Successful</h3>
            <p><strong>Transaction ID:</strong> {receipt.transactionId}</p>
            <p><strong>Amount Sent:</strong> {receipt.amountSent} BTC</p>
            <p><strong>Transaction Fee:</strong> {receipt.transactionFee} BTC</p>
            <p><strong>Receiver Address:</strong> {receipt.receiverAddress}</p>
            <p><strong>Status:</strong> {receipt.status}</p>
            <p><strong>Timestamp:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>
            
            <div className="actions">
                <button onClick={() => window.print()}>Print Receipt</button>
                <button onClick={() => navigator.clipboard.writeText(JSON.stringify(receipt))}>Copy Receipt</button>
            </div>
        </div>
    ) : (
        <div className="send-bitcoin">
            <h3>Send Bitcoin</h3>
            <input
                type="text"
                placeholder="Receiver Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount (BTC)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

module.exports = SendBitcoin;
