const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	sub_category: {
		type: String,
		required: true,
	},
	main_image: {
		type: String,
		required: true,
	},
	sub_images: {[String]},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	created_on: {
		type: Date,
		default: new Date(),
	},
});

module.exports = model("Product", productSchema);
