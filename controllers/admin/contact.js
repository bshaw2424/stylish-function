const ContactModel = require("../../models/Contacts");

module.exports.index = async (req, res, next) => {
  const messages = await ContactModel.find();
  res.render("admin/contact/contact", { messages });
};

module.exports.create = (req, res) => res.render("admin/contact/contactUs");

module.exports.post = async (req, res, next) => {
  const { Message } = req.body;
  await ContactModel.create(Message);
  res.redirect("/contact-us");
};

module.exports.showPage = async (req, res, next) => {
  const { id } = req.params;
  const message = await ContactModel.findById(id);
  res.render("admin/contact/contactShowPage", { message });
};

module.exports.delete = async (req, res, next) => {
  const { id } = req.params;
  await ContactModel.findByIdAndDelete(id);
  res.redirect("/admin.stylishfunction.com/messages");
};
