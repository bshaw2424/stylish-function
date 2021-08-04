const Article = require("../../models/Article");
const Product = require("../../models/Product");

// module.exports.create = async (req, res) => {
//   const { id } = req.params;
//   res.render("admin/products/create", { id });
// };

// module.exports.post = async (req, res, next) => {
//   const { Products } = req.body;
//   const { id } = req.params;
//   const Doc = Article.findById(id);
//   console.log(Doc);
//   res.redirect(`/admin/articles/${id}`);
// };

// module.exports.showPage = async (req, res, next) => {
//   await res.render("admin/products/showPage", { articles });
// };

module.exports.edit = async (req, res, next) => {
  const { id } = req.params;
  res.render("admin/products/edit", { id });
};

module.exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { Products } = req.body;
  const article_products = await Article.findByIdAndUpdate(
    id,
    { $push: { products: { Products } } },
    {
      new: true,
    },
  );
  await article_products.save();
  res.redirect(`/admin/articles/${id}`);
};

module.exports.delete = async (req, res, next) => {
  const { id } = req.params;
  await Article.findByIdAndDelete(id);
  res.redirect(`/admin/articles/${id}/products`);
};
