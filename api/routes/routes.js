const router = require("express").Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/protected', auth.isAuthenticated, (req, res) => {
    res.send("burası korumalı rota");
});

module.exports = router;