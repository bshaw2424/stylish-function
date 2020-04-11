const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	main_category: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	main_image: {
		type: String,
		required: true,
	},
	sub_images: [String],
	description: {
		type: String,
		required: true,
	},
	linkAddress: {
		type: String,
		required: true,
	},
	create_on: {
		type: Date,
		default: new Date(),
	},
});

const SeatingModel = model("seating", productSchema);
const TablesModel = model("table", productSchema);

module.exports = { SeatingModel, TablesModel };
