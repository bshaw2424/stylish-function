exports.index = (req, res) => {
	res.render("admin/adminIndex");
};

exports.logIn = (req, res) => {
	res.render("admin/login");
};

exports.logOut = (req, res) => {
	res.render("admin/logout");
};
