module.exports.checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    next();
  } else {
    res.redirect("/admin/login");
  }
};