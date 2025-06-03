import React, { useState } from 'react';

const TwoFactorAuth = ({ onVerify }) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (code === '') {
            setError('Please enter the 2FA code.');
            return;
        }
        // Simulate verification process
        const isValid = verifyCode(code);
        if (isValid) {
            onVerify();
        } else {
            setError('Invalid 2FA code. Please try again.');
        }
    };

    const verifyCode = (inputCode) => {
        // Placeholder for actual verification logic
        return inputCode === '123456'; // Example valid code
    };

    return (
        <div className="two-factor-auth">
            <h2>Two-Factor Authentication</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={code}
                    onChange={handleInputChange}
                    placeholder="Enter 2FA code"
                />
                <button type="submit">Verify</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default TwoFactorAuth;