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
    const { username, password } = req.body;
    const user = new UsersModel({ username });
    await UsersModel.register(user, password);
    await user.save();
    res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
    res.redirect("/admin/login");
  }
};
