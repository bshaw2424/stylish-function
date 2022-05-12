"use strict";
const fetch = require("node-fetch");
const { findById } = require("../../models/Contacts");

const ContactModel = require("../../models/Contacts");

module.exports.index = async (req, res) => {
  const messages = await ContactModel.find();

  res.render("admin/contacts/contact", {
    messages,
  });
};

module.exports.create = (req, res) => res.render("admin/contacts/contactUs");

module.exports.post = async (req, res) => {
  const { Message } = req.body;
  // reCaptcha response token
  const captcha = req.body["g-recaptcha-response"];
  const secretKey = "6LfDB7UfAAAAAAs1e_yxA1gprsTEuZn--7ihanyF";

  const verifyCaptchaResponseURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

  const response = await fetch(verifyCaptchaResponseURL);
  const data = await response.json();
  if (data.success) {
    const newMessage = new ContactModel(Message);
    await newMessage.save();
    res.redirect("/contact-us/success");
  }
};

// module.exports.update = (req, res) => {
//   console.log(req.body);
// };

module.exports.showPage = async (req, res) => {
  const { id } = req.params;
  const message = await ContactModel.findById(id);

  res.render("admin/contacts/contactShowPage", {
    message,
  });
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;

  const deleteMessage = await ContactModel.findByIdAndDelete(id);

  if (!deleteMessage) {
    throw new asyncError("Message Not Found", 404);
  }

  res.redirect("/admin/messages");
};
