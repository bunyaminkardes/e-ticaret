const loginController = {};

loginController.getLoginPage = (req,res)  => {
    res.render('giris');
}

loginController.login = (req,res) => {
    //login işlemi yapılacak.
}

module.exports = loginController;