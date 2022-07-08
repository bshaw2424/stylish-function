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
  const secret_key = process.env.RECAPTCHA_SECRET_KEY
  const verifyCaptchaResponseURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${reCaptchaBodyResponse}&remoteip=${req.connection.remoteAddress}`;

  const response = await fetch(verifyCaptchaResponseURL, {method: "post"});
  const data = await response.json({});
  if(data.success === true){
    res.send(data)
  }else{
    res.send({response: "false"})
  }
  console.log(verifyCaptchaResponseURL, data)
  // const newMessage = new ContactModel(Message);
  // await newMessage.save();
  // res.redirect("/contact/success");
};
