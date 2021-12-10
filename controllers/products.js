const ProductModel = require("../models/Product");

module.exports.product_showPage = async (req, res) => {
  const { product_slug } = req.params;
  const product = await ProductModel.findOne({ slug: product_slug });
  res.render("articles/productShowPage", { product });
};
