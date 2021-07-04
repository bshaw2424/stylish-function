const ProductsModel = require("../../models/Articles");

module.exports.index = async (req, res, next) => {
		const products = await ProductsModel.find();
		res.render("products/index", { products });
};

module.exports.showPage = async (req, res, next) => {
	  const { id } = req.params;
		const productShowPage = await ProductsModel.findById(id);
		res.render("products/showPage", { productShowPage });
};
