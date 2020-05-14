const ProductsModel = require("../../models/Products");

exports.index = async (req, res) => {
	try {
		const products = await ProductsModel.find();
		res.render("products/index", { products });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const productShowPage = await ProductsModel.findById(req.params.id);
		res.render("products/showPage", { productShowPage });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};
