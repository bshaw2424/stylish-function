exports.errorMessage = (req, res) => {
	res.status(404).render("pages/error404Page");
};
