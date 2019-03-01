const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const express    = require('express');
const app        = express();
const router     = express.Router();
const path       = require('path');

// routes
const seating = require('./routes/seating');

// mongo schema
const seatingSchema = require('./mongo-models/seating-Schema');
const tableSchema = require('./mongo-models/table-Schema');
const storageSchema = require('./mongo-models/storage-Schema');

// mongo database connection

//middleware
app.set("view engine", "ejs");
app.use('/seating', seating);
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public' + '/static-pages')));
app.use(bodyParser.urlencoded({extended: false}))


// start of routes

// index routes
app.get("/", (req, res) => res.render("pages/index"))



// storage routes
app.get("/storage", (req, res) => res.render("pages/storage"))
app.get("/storage/category/:category", (req, res) => res.render("pages/example"))
app.get("/seating/category/:category/:id", (req, res) => res.render("pages/example"))

// table routes
app.get("/table", (req, res) => res.render("pages/table"))
app.get("/table/category/:category", (req, res) => res.render("pages/example"))
app.get("/seating/category/:category/:id", (req, res) => res.render("pages/example"))

// end of routes


// port variable and server connection
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});