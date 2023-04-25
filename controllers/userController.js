const testData = require("../testData.js");
const userModel = require("../models/userModel.js");
const userController = {};

userController.login = (req, res) => {
    if(req.body.kullaniciAdi === testData.username && req.body.sifre === testData.password) {
        req.session.girisYapanKullanici = testData.username;
        res.redirect('/');
    }
};

userController.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

userController.register = (req, res) => {
    const newUser = new userModel({
        username : req.body.kullaniciAdi,
        password : req.body.sifre,
        email : "yok"
    });
    newUser.save().then(() => {
        console.log("kullanıcı başarıyla oluşturuldu.");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = userController;