const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");

const articleSchema = new Schema({
	article_title: {
		type: String
	},
	article_image: {
		type: String
	},
	article_description: {
		type: String
	},
	products: [{
		product_title: {
			type: String,
			required: true
		},
		product_price: {
			type: Number,
			min: [0, "Price can not be Negative"]
		}, 
		product_image: {
			type: String
		},
		product_description: {
			type: String,
			required: ["Description is required"]
		}
	}],
	created_on: {
		type: Date,
		default: new Date(),
	},
});

/*articleSchema.pre("save", function (next) {
	this.slug = slugify(this.article_title, { lower: true });
	next();
});*/

module.exports = model("Articles", articleSchema);
