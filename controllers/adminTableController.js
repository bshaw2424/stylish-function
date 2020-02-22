const { tableModel } = require("../Schema/productSchema");

class AdminTableRoutes {
	async index(req, res) {
		try {
			const tableProducts = await tableModel.find().exec();
			res.render("admin/tableProductIndex", { tableProducts });
		} catch (error) {
			if (error) {
				console.log(error);
				res.render("pages/error404Page");
			}
		}
	}

	newTableProduct(req, res) {
		res.render("admin/tableProductForm");
	}

	async postTableProduct(req, res) {
		try {
			await tableModel.create(req.body.product);
			res.redirect("/admin/index");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async showPage(req, res) {
		try {
			const product = await tableModel.findById(req.params.id).exec();
			res.render("admin/tableShowPage", { product });
		} catch (error) {
			if (error) {
				res.redirect("/admin/product-index");
			}
		}
	}

	async edit(req, res) {
		try {
			const product = await tableModel.findById(req.params.id).exec();
			res.render("admin/tableEditProduct", { product });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async update(req, res) {
		try {
			const tableProduct = await tableModel.findByIdAndUpdate(
				req.params.id,
				req.body.product,
			);
			res.redirect(`/admin/products/table/${req.params.id}`);
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async delete(req, res) {
		try {
			await tableModel.findByIdAndRemove(req.params.id);
			res.redirect("/admin/products/table");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = AdminTableRoutes;
