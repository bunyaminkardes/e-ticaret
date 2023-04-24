const homeController = {};

homeController.getLoginPage = (req,res) => {
    let girisYapanKullanici;
    if(req.session.girisYapanKullanici) {
        girisYapanKullanici = req.session.girisYapanKullanici;
    }
    res.render('anasayfa', {data:girisYapanKullanici});
}

module.exports = homeController;