const testData = require("../testData.js"); //test
const loginController = {};

loginController.getLoginPage = (req,res)  => {
    res.render('giris');
}

loginController.login = (req,res) => {
    if(req.body.kullaniciAdi === testData.username && req.body.sifre === testData.password) {
        console.log("giris basarili...");
        req.session.girisYapanKullanici = testData.username;
    }
    res.redirect('/'); //işlem sonunda yönlendirme yap.
}

module.exports = loginController;