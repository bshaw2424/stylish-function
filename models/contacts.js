const mongoose = require("mongoose");
const { Schema, model } = mongooose;

const contactSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	created_on: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = model("contact", contactSchema);
