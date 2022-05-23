"use strict";

const fetch = require("node-fetch");
const ContactModel = require("../../models/Contacts");
require("dotenv").config();

module.exports.index = async (req, res) => {
  const messages = await ContactModel.find({});

  res.render("admin/contacts/contact", {
    messages,
    sortMessage: "All Clear...No Messages",
  });
};

module.exports.create = (req, res) => res.render("admin/contacts/contactUs");

module.exports.post = async (req, res) => {
  const { Message } = req.body;

  // reCaptcha response token
  const reCaptchaBodyResponse = req.body["g-recaptcha-response"];

  const verifyCaptchaResponseURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${reCaptchaBodyResponse}`;

  const response = await fetch(verifyCaptchaResponseURL);
  if (response.ok) {
    const data = await response.json();
    if (data.success) {
      const newMessage = new ContactModel(Message);
      await newMessage.save();
      res.redirect("/contact-us/success");
    }
  }
};

module.exports.ascSort = async (req, res) => {
  const ascendingSort = await ContactModel.find({}).sort({ created_on: 1 });
  res.render("admin/contacts/contactAscendingSort", {
    ascendingSort,
    sortMessage: "All Clear...No Messages",
  });
};

module.exports.descSort = async (req, res) => {
  const descendingSort = await ContactModel.find({}).sort({ created_on: -1 });
  res.render("admin/contacts/contactDescendingSort", {
    descendingSort,
    sortMessage: "All Clear...No Messages",
  });
};

module.exports.showPage = async (req, res) => {
  const { id } = req.params;
  const message = await ContactModel.findById(id);

  res.render("admin/contacts/contactShowPage", { message });
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;

  const deleteMessage = await ContactModel.findByIdAndDelete(id);

  res.redirect("/messages");
};
