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
const featuredRoutes = require("./routes/admin/featured");
const productRoutes = require("./routes/admin/products");
const contactRoutes = require("./routes/admin/contact");
const staticRoutes = require("./routes/index/staticRoutes");
const mainArticleRoutes = require("./routes/articleRoutes");
const mainProductRoutes = require("./routes/products");
const errorRoutes = require("./utility/error");

// middleware
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/admin", adminIndexRoutes);
app.use("/admin/products", productRoutes);
app.use("/admin/messages", contactRoutes);
app.use("/admin/featured/articles", featuredRoutes);
app.use("/trending/articles", mainArticleRoutes);
app.use("/products", mainProductRoutes);
app.use("/", staticRoutes);
app.use(errorRoutes.errorMessage);
app.use(errorRoutes.asyncError);
app.listen(PORT, () => console.log(`Server on PORT ${PORT}`));
