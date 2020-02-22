const { seatingModel } = require("../Schema/productSchema");

class AdminSeatingRoutes {
	async index(req, res) {
		try {
			const seatingProducts = await seatingModel.find().exec();
			res.render("admin/seatingProductIndex", { seatingProducts });
		} catch (error) {
			if (error) {
				console.log(error);
				res.render("pages/error404Page");
			}
		}
	}

	newSeatingProduct(req, res) {
		res.render("admin/seatingProductForm");
	}

	async postSeatingProduct(req, res) {
		try {
			await seatingModel.create(req.body.product);
			res.redirect("/admin/index");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async showPage(req, res) {
		try {
			const product = await seatingModel.findById(req.params.id).exec();
			res.render("admin/seatingShowPage", { product });
		} catch (error) {
			if (error) {
				res.redirect("/admin/product-index");
			}
		}
	}

	async edit(req, res) {
		try {
			const product = await seatingModel.findById(req.params.id).exec();
			res.render("admin/editProduct", { product });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async update(req, res) {
		try {
			const seatingProduct = await seatingModel.findByIdAndUpdate(
				req.params.id,
				req.body.product
			);
			res.redirect(`/admin/products/seating/${req.params.id}`);
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async delete(req, res) {
		try {
			await seatingModel.findByIdAndRemove(req.params.id);
			res.redirect("/admin/products/seating");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = AdminSeatingRoutes;