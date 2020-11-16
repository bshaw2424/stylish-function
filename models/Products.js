const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");

const productSchema = new Schema({
	title: {
		type: String,
		trim: true,
		unique: true,
		required: [true, "Product must have a title"],
	},
	slug: String,
	category: {
		type: String,
		enum: ["modular", "lounge", "sleeper"],
		required: [true, "option required"],
	},
	price: {
		type: Number,
		required: [true, "Price is required"],
		min: [0, "Price must be greater than 0"],
	},
	description: {
		type: String,
		required: [true, "Description can't be blank"],
		unique: true,
	},
	created_on: {
		type: Date,
		default: new Date(),
	},
});

productSchema.pre("save", function (next) {
	this.slug = slugify(this.title, { lower: true });
	next();
});

module.exports = model("Product", productSchema);
