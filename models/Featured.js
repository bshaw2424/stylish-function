const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const featuredSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	price: Number,
	linkAddress: String,
	main_image: {
		type: String,
		required: true,
		unique: true,
	},
	sub_image: {
		type: [String],
		unique: true,
	},
	video: {
		type: [String],
		unique: true,
	},
	description: {
		main: {
			type: String,
			required: true,
			unique: true,
		},
		brief: {
			type: String,
			required: true,
			unique: true,
		},
	},
});

module.exports = model("Featured", featuredSchema);
