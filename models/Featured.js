const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const featuredSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	price: Number,
	linkAddress: String,
	main_image: {
		type: String,
		required: true,
	},
	sub_images: {
		type: [String],
	},
	video: {
		type: [String],
		default: null,
	},
	description: {
		main: {
			type: String,
			required: true,
		},
		brief: {
			type: String,
			required: true,
		},
	},
	created_on: {
		type: Date,
		default: new Date(),
	},
});

const FeaturedModel = model("Featured", featuredSchema);

module.exports = { FeaturedModel };
