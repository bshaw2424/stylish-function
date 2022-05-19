if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/AdminUsers");

require("./mongoDatabase");
require("./utility/error");

const PORT = process.env.PORT || 8080;

// admin routes
const adminIndexRoutes = require("./routes/admin");
const adminArticleRoutes = require("./routes/admin/articles");
const adminProductRoutes = require("./routes/admin/products");
const adminContactRoutes = require("./routes/admin/contact");
const adminUserRoutes = require("./routes/admin/users");

// client-side routes
const staticRoutes = require("./routes/index/static");
const mainArticleRoutes = require("./routes/index/articles");
const indexProductRoutes = require("./routes/index/products");

const errorRoutes = require("./utility/error");

app.use(express.static("public"));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "lookingtogetthisstarted",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 3600000, //1 hour
    },
  }),
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// admin middleware
app.use("/articles", adminArticleRoutes);
app.use("/articles/:slug/products", adminProductRoutes);
app.use("/messages", adminContactRoutes);

// client-side middleware
app.use("/main/articles", mainArticleRoutes);
app.use("/main/articles/:slug/products", indexProductRoutes);
app.use("/", staticRoutes, adminIndexRoutes, adminUserRoutes);

// error middleware
app.use(errorRoutes.errorMessage);
app.use(errorRoutes.AsyncError);

app.listen(PORT, () => console.log(`Server on PORT ${PORT}`));
