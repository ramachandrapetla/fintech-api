const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
    const payload = {
        accountKey: user.accountKey,
        username: user.username,
    };
    const options = {
        expiresIn: '4h',
    };

    return jwt.sign(payload, secret, options);
}

const verifyToken = (token) => {
    return jwt.verify(token, secret);
}


module.exports = {
    generateToken,
    verifyToken,
};