const mongoose = require("mongoose");
const {
	productsModel,
	seatingModel,
	tableModel,
} = require("../Schema/productSchema");

// const addNewProduct = new tableModel({
// 	title: "main product",
// 	main_category: "table",
// 	sub_category: "extendable",
// 	price: 224400,
// 	main_image: "https://bit.ly/2pipyz8",
// 	sub_images: null,
// 	product_description: "this is a seating example description",
// 	linkAddress: "https://www.google.com",
// });

// tableModel.save((err, product) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("saved to database");
// 		console.log(product);
// 	}
// });

module.exports = tableModel;
