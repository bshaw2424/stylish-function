if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const database = require("./src/mongoDatabase");
const path = require("path");
const AsyncError = require("./src/utility/error");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./src/models/AdminUsers");
const PORT = process.env.PORT || 3000;

// imported routes
const adminIndexRoutes = require("./src/routes/admin");
const articleRoutes = require("./src/routes/admin/articles");
const productRoutes = require("./src/routes/admin/products");
const indexProductRoutes = require("./src/routes/index/products");
const contactRoutes = require("./src/routes/admin/contact");
const userRoutes = require("./src/routes/admin/users");
const staticRoutes = require("./src/routes/index/static");
const mainArticleRoutes = require("./src/routes/index/articles");
const errorRoutes = require("./src/utility/error");
const bcrypt = require("./src/bcrypt");

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "lookingtogetthisstarted",
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.use(function (req, res, next) {
  res.locals.username = req.user;
  next();
});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/admin", adminIndexRoutes);
app.use("/admin/articles", articleRoutes);
app.use("/admin/articles/:slug/products", productRoutes);
app.use("/admin/messages", contactRoutes);
app.use("/admin/users", userRoutes);
app.use("/articles", mainArticleRoutes);
app.use("/articles/:slug/products", indexProductRoutes);

app.use("/", staticRoutes);
app.use(errorRoutes.errorMessage);
app.use(errorRoutes.AsyncError);
app.listen(PORT, () => console.log(`Server on PORT ${PORT}`));
