const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const database = require("./mongoDatabase");
const path = require("path");
const PORT = process.env.PORT || 3000;

// imported routes
const adminIndex = require("./routes/admin/indexRoutes");
const featuredRoutes = require("./routes/admin/featuredRoutes");
const productRoutes = require("./routes/admin/products");
const contactRoutes = require("./routes/admin/contactRoutes");
const staticRoutes = require("./routes/index/staticRoutes");
const mainArticleRoutes = require("./routes/articleRoutes");
const mainProductRoutes = require("./routes/products");
const errorRoutes = require("./routes/index/errorRoute");

// middleware
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// routes
app.use("/admin", adminIndex, contactRoutes, productRoutes);
app.use("/admin/featured/articles", featuredRoutes);
app.use("/trending/articles", mainArticleRoutes);
app.use("/products", mainProductRoutes);
app.use("/", staticRoutes);
app.use(errorRoutes.errorMessage);

app.listen(PORT, () => console.log(`Server on ${PORT}`));
