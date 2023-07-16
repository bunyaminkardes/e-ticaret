const userController = {};
const userModel = require("../models/userModel");

userController.login = (req, res) => {
    res.send("login attempt.");
};

userController.signup = (req, res) => {
    res.send("signup attempt.");
};

module.exports = userController;