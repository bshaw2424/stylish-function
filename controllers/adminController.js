const productsModel = require("../models/seatingTableProductModel");

class AdminRoutes {
	adminLogIn(req, res) {
		res.render("admin/login");
	}

	async adminMainIndexPage(req, res) {
		try {
			const allProducts = await productsModel.find().exec();
			res.render("admin/admin-index", { allProducts });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async adminProductIndexPage(req, res) {
		try {
			const indexProducts = await productsModel.find().exec();
			res.render("admin/products-index", { indexProducts });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	adminProductForm(req, res) {
		res.render("admin/products-form");
	}

	async adminProductPostForm(req, res) {
		try {
			await productsModel.create(req.body.product);
			res.redirect("/admin/index");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async adminProductShowPage(req, res) {
		try {
			const product = await productsModel.findById(req.params.id).exec();
			res.render("admin/productShowPage", { product });
		} catch (error) {
			if (error) {
				res.redirect("/admin/product-index");
			}
		}
	}

	async adminProductEditForm(req, res) {
		try {
			const product = await productsModel.findById(req.params.id).exec();
			res.render("admin/product_edit", { product });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async adminUpdateProduct(req, res) {
		try {
			const put_request = await productsModel.findByIdAndUpdate(
				req.params.id,
				req.body.product,
			);
			res.redirect(`/admin/products/${req.params.id}`);
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async adminDeleteProduct(req, res) {
		try {
			await productsModel.findByIdAndRemove(req.params.id);
			res.redirect("/admin/products");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = AdminRoutes;
