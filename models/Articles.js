const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");

const articleSchema = new Schema({
	title: {
		type: String, 
		trim: true, 
		required: true
	},
	image: {
		type: String
	},
	description: {
		type: String, 
		trim: true,
		required: true
	},
	slug: {
		type: String,
		unique: true,
	},
	products: [{
		_id: { id: false },
		title: {
			type: String,
			trim: true,
		},
		price: {
			type: Number,
			min: [0, "Price can not be Negative"]
		}, 
		image: {
			type: String
		},
		description: {
			type: String,
			trim: true,
			required: [true, "description is required"]
		}
	}],
	created_on: {
		type: Date,
		default: new Date(),
	}
});

articleSchema.pre("save", function(next) {
	this.slug = slugify(this.title, { lower: true });
	next();
});

module.exports = model("Articles", articleSchema);
