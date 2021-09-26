const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const database = require("./mongoDatabase");
const path = require("path");
const asyncError = require("./utility/error");
const PORT = process.env.PORT || 3000;

// imported routes
const adminIndexRoutes = require("./routes/admin");
const articleRoutes = require("./routes/admin/articles");
const productRoutes = require("./routes/admin/products");
const contactRoutes = require("./routes/admin/contact");
const usersRoutes = require("./routes/admin/users");
const staticRoutes = require("./routes/index/static");
const mainArticleRoutes = require("./routes/index/articles");
const errorRoutes = require("./utility/error");
const bcrypt = require("./bcrypt");

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/admin", adminIndexRoutes);
app.use("/admin/articles", articleRoutes);
app.use("/admin/articles/:id/products", productRoutes);
app.use("/admin/messages", contactRoutes);
app.use("/admin/users", usersRoutes);
app.use("/articles", mainArticleRoutes);
app.use("/", staticRoutes);
app.use(errorRoutes.errorMessage);
app.use(errorRoutes.asyncError);
app.listen(PORT, () => console.log(`Server on PORT ${PORT}`));
