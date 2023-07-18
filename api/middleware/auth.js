const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
    try {
        const {jwtToken} = req.cookies; //kullanıcı tokene sahipse al.
        if(!jwtToken) {
            return next('lütfen devam etmek için giriş yapın.');
        }
        //kullanıcının tokeni varsa bile doğrula.
        const verify = await jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        req.user = await userModel.findById(verify.id);
        next();
    }
    catch(error) {
        return next(error);
    }
}

module.exports = {isAuthenticated};