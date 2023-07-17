const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
    try {
        const {token} = req.cookies; //kullanıcı tokene sahipse al.
        if(!token) {
            return next('lütfen devam etmek için giriş yapın.');
        }
        //kullanıcının tokeni varsa bile doğrula.
        const verify = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await userModel.findById(verify.id);
        next();
    }
    catch(error) {
        return next(error);
    }
}

module.exports = {isAuthenticated};