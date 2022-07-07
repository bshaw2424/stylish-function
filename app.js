if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const methodOverride = require("method-override");
const path = require("path");

require("./mongoDatabase");

const PORT = process.env.PORT || 8080;

// admin routes
const adminContactRoutes = require("./routes/admin/contact");

// client-side routes
const staticRoutes = require("./routes/index/static");
const mainArticleRoutes = require("./routes/index/articles");
const indexProductRoutes = require("./routes/index/products");

const errorRoutes = require("./utility/error");

app.use(express.static("public"));
app.use(express.json());
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// admin middleware
app.use("/messages", adminContactRoutes);

// client-side middleware
app.use("/main/articles", mainArticleRoutes);
app.use("/main/articles/:slug/products", indexProductRoutes);
app.use("/", staticRoutes);

// error middleware
app.use(errorRoutes.errorMessage);
app.use(errorRoutes.AsyncError);

app.listen(PORT, () => console.log(`Server on PORT ${PORT}`));
