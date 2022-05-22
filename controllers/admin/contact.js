"use strict";
const fetch = require("node-fetch");
const { descSort } = require("../../functions");
const { findById } = require("../../models/Contacts");
const ContactModel = require("../../models/Contacts");
require("dotenv").config();

module.exports.index = async (req, res) => {
  const messages = await ContactModel.find({});

  res.render("admin/contacts/contact", { messages });
};

module.exports.create = (req, res) => res.render("admin/contacts/contactUs");

module.exports.post = async (req, res) => {
  const { Message } = req.body;

  // reCaptcha response token
  const captcha = req.body["g-recaptcha-response"];

  const verifyCaptchaResponseURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`;

  const response = await fetch(verifyCaptchaResponseURL);
  const data = await response.json();
  if (data.success) {
    const newMessage = new ContactModel(Message);
    await newMessage.save();
  }
  console.log(data);
  res.redirect("/contact-us/success");
};

module.exports.ascSort = async (req, res) => {
  const ascendingSort = await ContactModel.find({}).sort({ created_on: 1 });
  res.render("admin/contacts/contactAscendingSort", { ascendingSort });
};

module.exports.descSort = async (req, res) => {
  const descendingSort = await ContactModel.find({}).sort({ created_on: -1 });
  res.render("admin/contacts/contactDescendingSort", { descendingSort });
};

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

  res.redirect("/messages");
};
