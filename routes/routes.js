const express = require("express");
const router = express.Router();

const loginController = require('../controllers/loginController.js');

router.get('/', (req,res) => {
    res.render('anasayfa');
});

router.get('/login', loginController.getLoginPage);

module.exports = router;