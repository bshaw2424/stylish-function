"use strict";

const fetch = require("node-fetch");
const ContactModel = require("../models/Contacts");
require("dotenv").config();

module.exports.create = (req, res) => res.render("contactUs");

module.exports.post = async (req, res) => {
  const { Message } = req.body;

  // reCaptcha response token
  const reCaptchaBodyResponse = req.body["g-recaptcha-response"];
  const verifyCaptchaResponseURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${reCaptchaBodyResponse}&remoteip=${req.connection.remoteAddress}`;

  const response = await fetch(verifyCaptchaResponseURL);
  const data = await response.json({});
  res.send(data)
  // const newMessage = new ContactModel(Message);
  // await newMessage.save();
  // res.redirect("/contact/success");
};
