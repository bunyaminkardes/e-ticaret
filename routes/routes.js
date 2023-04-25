const express = require("express");
const router = express.Router();

const pageController = require("../controllers/pageController.js");
const userController = require("../controllers/userController.js");

router.get('/', pageController.getIndexPage);
router.get('/login', pageController.getLoginPage);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/register', pageController.getRegisterPage);
router.post('/register', userController.register);

module.exports = router;