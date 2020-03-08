const contactUsForm = require("../models/contacts");

exports.index = async (req, res) => {
	try {
		await contactUsForm.find();
		res.render("pages/contact", { form });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.create = (req, res) => res.render("pages/contactUs");

exports.post = async (req, res) => {
	try {
		const form = await contactUsForm.create(req.body.form);
		console.log(form);
		res.render("pages/contact", { form });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const messages = await contactUsForm.findById(req.params.id);
		res.render("/contact", { messages });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.delete = async (req, res) => {
	try {
		await contactUsForm.findByIdAndDelete(req.params.id);
		res.redirect("/contact-us");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
