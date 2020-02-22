const {
	productsModel,
	seatingModel,
	tableModel,
} = require("../Schema/productSchema");

class AdminRoutes {
	adminLogIn(req, res) {
		res.render("admin/login");
	}

	async adminMainIndexPage(req, res) {
		try {
			const allProductsIndex = await seatingModel.find().exec();
			const tableproducts = await tableModel.find().exec();
			res.render("admin/adminIndex", { allProductsIndex, tableproducts });
		} catch (error) {
			if (error) {
				console.log(error);
				res.render("pages/error404Page");
			}
		}
	}

	async adminProductIndexPage(req, res) {
		try {
			const indexProducts = await seatingModel.find().exec();
			const tableProducts = await tableModel.find().exec();
			res.render("admin/products-index", { indexProducts, tableProducts });
		} catch (error) {
			if (error) {
				console.log(error);
				res.render("pages/error404Page");
			}
		}
	}

	adminProductForm(req, res) {
		res.render("admin/productForm");
	}

	adminTableProductForm(req, res) {
		res.render("admin/tableProductForm");
	}

	async adminProductPostForm(req, res) {
		try {
			await seatingModel.create(req.body.product);
			res.redirect("/admin/index");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async adminTableProductPostForm(req, res) {
		try {
			await tableModel.create(req.body.tableproduct);
			res.redirect("/admin/index");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async adminProductShowPage(req, res) {
		try {
			const product = await seatingModel.findById(req.params.id).exec();
			res.render("admin/productShowPage", { product });
		} catch (error) {
			if (error) {
				res.redirect("/admin/product-index");
			}
		}
	}

	async adminProductEditForm(req, res) {
		try {
			const product = await seatingModel.findById(req.params.id).exec();

			res.render("admin/product_edit", { product });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async adminUpdateProduct(req, res) {
		try {
			const seatingProduct = await seatingModel.findByIdAndUpdate(
				req.params.id,
				req.body.seatingProduct,
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
			await seatingModel.findByIdAndRemove(req.params.id);
			res.redirect("/admin/products");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = AdminRoutes;
