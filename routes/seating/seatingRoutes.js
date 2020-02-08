const express = require("express");
const router = express.Router();
const productsModel = require("../../models/productsModel");

router.get("/seating", async (req, res) => {
	try {
		const seatingProducts = await productsModel.find({ main_category: "Sofa" });
		res.render("pages/seating", { seatingProducts });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page")
		}
	}
});

router.get("/seating/:id", async (req, res) => {
	try {
		const products = await productsModel.findById(req.params.id).exec();
		res.render("pages/productShowPage", { products });
	} catch (error) {
		if(error){
			res.render("pages/error404Page")
		}
	}
});

module.exports = router;