const jwtHelper = require('../utility/jwt.helper');

const login = async (req, res) => {
    const { userId, password } = req.body;
    // Validate the user input

    // Check if the user exists in the database
    //TODO: Implement this
    const user = {accountKey: "689534834", username: "testuser"};
    const token = jwtHelper.generateToken(user);
    res.json({ token });
}

module.exports = { login };