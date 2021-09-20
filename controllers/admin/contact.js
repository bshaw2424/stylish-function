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

module.exports.contact_post = async (req, res) => {
  const { message } = req.body;
  const runt = await ContactModel.find({});
  const turn = runt.map(a => a._id);

  let gran = [];
  for (let i = 0; i < message.length; i++) {
    gran.push({ _id: turn[i], message_value: Boolean(message[i]) });
  }
  console.log(gran);

  res.redirect("/admin/messages");
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
