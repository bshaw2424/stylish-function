const express = require("express");
const router = express.Router();
const product = require("../../models/seatingTableProductModel");

router.get("/tables", async (req, res) => {
	try {
		const tableProducts = await product.find({main_category: "table"}).exec();
		res.render("pages/tables", { tableProducts });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page")
		}
	}
});

router.get("/tables/:id", async (req, res) => {
	try {
		const products = await product.findById(req.params.id).exec();
		res.render("pages/productShowPage", { products });
	} catch (error) {
		if(error){
			res.render("pages/error404Page")
		}
	}
});

module.exports = router;