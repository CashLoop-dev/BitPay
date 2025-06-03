// utils/auth.js

let secret = "JBSWY3DPEHPK3PXP";  // Secret key (for simulation)

// Simulate verification of 2FA using a hardcoded code
function verify2FACode(code) {
    const validCode = "123456"; // Hardcoded code for simulation
    return code === validCode;
}

// Basic user authentication (password check)
function authenticateUser(password) {
    return password === "walletpassword"; // Simple password simulation
}

module.exports = { verify2FACode, authenticateUser };
