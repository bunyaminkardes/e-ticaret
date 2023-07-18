const router = require("express").Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post('/login', userController.login);
router.post('/register', userController.register);

router.get('/product/:id', productController.getProduct);
router.get('/product/', productController.getAllProducts);
router.delete('/product/:id', productController.deleteProduct);


router.get('/protected', auth.isAuthenticated, (req, res) => {
    res.send("burası korumalı rota");
});

module.exports = router;