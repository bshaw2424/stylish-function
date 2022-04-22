"use strict";

const { findById } = require("../../models/Contacts");

const ContactModel = require("../../models/Contacts");

const { ajaxFilter } = require("../../functions");

module.exports.index = async (req, res, next) => {
  const messages = await ContactModel.find();

  if (!messages) {
    throw new asyncError("Message Not Found", 404);
  }

  res.render("admin/contacts/contact", {
    messages,
  });
};

module.exports.create = (req, res) => res.render("admin/contacts/contactUs");

module.exports.post = async (req, res, next) => {
  const { Message } = req.body;
  const newMessage = new ContactModel(Message);

  if (!newMessage) {
    throw new asyncError("Something Went Wrong Creating Message", 404);
  }

  await newMessage.save();
  res.redirect("/contact-us/success");
};

module.exports.update = (req, res) => {
  console.log(req.body);
};

module.exports.showPage = async (req, res, next) => {
  const { id } = req.params;
  const message = await ContactModel.findById(id);

  // if (!message) {
  //   throw new asyncError("Message Not Found", 404);
  // }

  res.render("admin/contacts/contactShowPage", {
    message,
  });
};

module.exports.delete = async (req, res, next) => {
  const { id } = req.params;

  const deleteMessage = await ContactModel.findByIdAndDelete(id);

  if (!deleteMessage) {
    throw new asyncError("Message Not Found", 404);
  }

  res.redirect("/admin/messages");
};
