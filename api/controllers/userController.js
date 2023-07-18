const userController = {};
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userController.register = async (req, res) => {
    try {
        let { username, password, email } = req.body;
        const existingUser = await userModel.findOne({ username: username });
        if (existingUser) {
            return res.status(400).json({message: 'böyle bir kullanıcı zaten bulunuyor.' });
        }
        password = await bcrypt.hash(password, 10);
        const user = new userModel({
            username: username,
            password: password,
            email: email
        });
        await user.save();
        return res.status(200).json({message : 'kayıt başarılı.'});
    }
    catch (error) {
        return res.status(500).json({message : `bir hata meydana geldi : ${error} `});
    }
};

userController.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await userModel.findOne({ username: username });
        if (!existingUser) {
            return res.status(404).json({ message: 'böyle bir kullanıcı bulunmuyor.' });
        }
        const isPasswordMatched = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordMatched) {
            return res.status(400).json({ message: 'girilen bilgiler yanlış.' });
        }
        const token = await jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
             expiresIn: process.env.JWT_EXPIRE
        });
        return res.status(200).cookie("jwtToken", token, {
            httpOnly: true,
            secure: true,
            maxAge: 3600000, //1 saat (milisaniye cinsinden)
            sameSite: 'strict'
        }).json({ success: true, message: "giriş başarılı." });
    }
    catch (error) {
        return res.status(500).json({ error: error });
    }
};

module.exports = userController;