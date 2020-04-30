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
	sub_images: {
		type: [String],
		unique: true,
	},
	video: {
		type: [String],
		default: null,
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
	created_on: {
		type: String,
		default: new Date(),
	},
});

const FeaturedModel = model("Featured", featuredSchema);

module.exports = { FeaturedModel };
