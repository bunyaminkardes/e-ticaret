const express = require("express");
const router = express.Router();

const loginController = require('../controllers/loginController.js');
const homeController = require('../controllers/homeController.js');

router.get('/', homeController.getLoginPage);

router.get('/login', loginController.getLoginPage);
router.post('/login', loginController.login);

module.exports = router;