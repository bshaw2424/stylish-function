const express = require("express");
const router = express.Router();
const product = require("../../models/seatingTableProductModel");

router.get("/seating", async (req, res) => {
	try {
		const seatingProducts = await product.find({main_category: "seating"}).exec();
		res.render("pages/seating", { seatingProducts });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page")
		}
	}
});

router.get("/seating/:id", async (req, res) => {
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