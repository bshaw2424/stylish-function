"use strict";

const { json } = require("body-parser");
const fetch = require("node-fetch");
const ContactModel = require("../models/Contacts");
require("dotenv").config();

module.exports.create = (req, res) => res.render("contactUs");

module.exports.post = async (req, res) => {
  const { Message } = req.body;

  // reCaptcha response token
  const reCaptchaBodyResponse = req.body["g-recaptcha-response"];
  const verifyCaptchaResponseURL = `https://www.google.com/recaptcha/api/siteverify?secret=6LfDB7UfAAAAAAs1e_yxA1gprsTEuZn--7ihanyF&response=${reCaptchaBodyResponse}&remoteip=${req.connection.remoteAddress}`;

  const response = await fetch(verifyCaptchaResponseURL);
  const data = await response.json({});

  if (data.success === true) {
    const newMessage = new ContactModel(Message);
    await newMessage.save();
    res.send(data);
    //res.redirect("/contact/success");
  }
  res.redirect("/contact");
};
