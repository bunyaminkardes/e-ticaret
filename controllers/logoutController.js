const logoutController = {};

logoutController.logOut = (req,res) => {
    req.session.destroy();
    res.redirect('/');
}

module.exports = logoutController;