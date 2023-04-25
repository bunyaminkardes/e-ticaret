const pageController = {};

pageController.getIndexPage = (req, res) => {
    res.render('anasayfa', {data : req.session.girisYapanKullanici});
};

pageController.getLoginPage = (req, res) => {
    res.render('giris');
};

pageController.getRegisterPage = (req, res) => {
    res.render('kayit');
};

module.exports = pageController;