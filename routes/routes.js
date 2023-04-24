const express = require("express");
const router = express.Router();

const loginController = require('../controllers/loginController.js');
const homeController = require('../controllers/homeController.js');
const logoutController = require('../controllers/logoutController.js');

router.get('/', homeController.getLoginPage);

router.get('/login', loginController.getLoginPage);
router.post('/login', loginController.login);

router.get('/logout', logoutController.logOut);

module.exports = router;