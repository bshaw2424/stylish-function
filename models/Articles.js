const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");

const articleSchema = new Schema({
	title: {
		type: String,
		trim: true,
		unique: true,
		required: [true, "Article must have a title"],
	},
	slug: String,
	image: {
		type: String,
		unique: true,
	},
	description: {
		type: String,
		required: [true, "Description required"],
		unique: true,
	},
	products: [{
		title: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			min: [0, "Price can not be Negative"]
		}, 
		image: {
			type: String,
			unique: true
		},
		description: {
			type: String,
			required: ["Description is required"]
		}
	}],
	created_on: {
		type: Date,
		default: new Date(),
	},
});

articleSchema.pre("save", function (next) {
	this.slug = slugify(this.title, { lower: true });
	next();
});

module.exports = model("Product", articleSchema);
