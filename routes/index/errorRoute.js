exports.errorMessage = (req, res) => {
	res.status(404).render("pages/error404Page");
};

module.exports.asyncError = async (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch((error) => next(error));
	};
};
