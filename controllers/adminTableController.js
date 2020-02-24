const { tableModel } = require("../Schema/productSchema");

class AdminTable {
	async index(req, res) {
		try {
			const tableProducts = await tableModel.find().exec();
			res.render("admin/table/tableIndex", { tableProducts });
		} catch (error) {
			if (error) {
				console.log(error);
				res.render("pages/error404Page");
			}
		}
	}

	create(req, res) {
		res.render("admin/table/tableProductForm");
	}

	async post(req, res) {
		try {
			await tableModel.create(req.body.product);
			res.redirect("/admin/products/tables");
		} catch (error) {
			console.log(error);
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async showPage(req, res) {
		try {
			const product = await tableModel.findById(req.params.id).exec();
			res.render("admin/table/tableShowPage", { product });
		} catch (error) {
			if (error) {
				res.redirect("/admin/products/tables");
			}
		}
	}

	async edit(req, res) {
		try {
			const product = await tableModel.findById(req.params.id).exec();
			res.render("admin/table/tableEditProduct", { product });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async update(req, res) {
		try {
			await tableModel.findByIdAndUpdateOne(req.params.id, req.body.product);
			res.redirect(`/admin/products/tables/${req.params.id}`);
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async delete(req, res) {
		try {
			await tableModel.findByIdAndDeleteOne(req.params.id);
			res.redirect("/admin/products/tables");
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = AdminTable;
