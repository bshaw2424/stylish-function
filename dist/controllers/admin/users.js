"use strict";

const UsersModel = require("../../models/AdminUsers");

const bcrypt = require("bcrypt");

module.exports.index = (req, res) => {
  res.render("admin/users/index");
};

module.exports.create = (req, res) => {
  res.render("admin/users/create");
};

module.exports.post = async (req, res) => {
  try {
    const {
      username,
      password
    } = req.body;
    const user = new UsersModel({
      username
    });
    await UsersModel.register(user, password);
    await user.save();
    req.login(user, function (err) {
      if (err) return next(err);
      return res.redirect("/admin/dashboard");
    });
  } catch (error) {
    res.redirect("/admin/logout");
  }
};