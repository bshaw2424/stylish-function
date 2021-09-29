const { findById } = require("../../models/Contacts");
const ContactModel = require("../../models/Contacts");

module.exports.index = async (req, res) => {
  const messages = await ContactModel.find();
  res.render("admin/contacts/contact", { messages });
};

module.exports.create = (req, res) => res.render("admin/contacts/contactUs");

module.exports.post = async (req, res) => {
  const { Message } = req.body;
  const newMessage = new ContactModel(Message);
  await newMessage.save();
  res.redirect("/contact-us");
};

module.exports.update = (req, res) => {
  console.log(req.body);
};

module.exports.showPage = async (req, res) => {
  const { id } = req.params;
  const message = await ContactModel.findById(id);
  res.render("admin/contacts/contactShowPage", { message });
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  await ContactModel.findByIdAndDelete(id);
  res.redirect("/admin/messages");
};
