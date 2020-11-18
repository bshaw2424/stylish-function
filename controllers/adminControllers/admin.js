exports.index = (req, res) => {
	res.render("admin/adminIndex");
};

module.exports.logIn = (req, res) => {
	res.render("admin/login");
};

module.exports.logOut = (req, res) => {
	res.render("admin/logout");
};
