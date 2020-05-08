const ContactModel = require("../../models/Contacts");

exports.index = async (req, res) => {
	try {
		const messages = await ContactModel.find();
		res.render("admin/contact/contact", { messages });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.create = (req, res) => res.render("pages/contactUs");

exports.post = async (req, res) => {
	try {
		await ContactModel.create(req.body.Message);
		res.redirect("/admin/messages");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const message = await ContactModel.findById(req.params.id);
		res.render("admin/contact/contactShowPage", { message });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.delete = async (req, res) => {
	try {
		await ContactModel.findByIdAndDelete(req.params.id);
		res.redirect("/admin/messages");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
