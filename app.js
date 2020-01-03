const bodyParser = require('body-parser');
const express = require('express');
const dataBaseConnection = require('./mongodb_connect');
const product = require('./models/productsModel');
const featured = require('./models/featuredProductModel');
const trending = require('./models/trendProductModel');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/mainRoutes');

// const static = require('./routes/staticRoutes');
const errorRoutes = require('./routes/errorRoute');

const errorRoute = new errorRoutes();
app.get("/login", function(req, res) {
    res.render("admin/login")
})
// middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// route middleware
app.use("/", routes);
app.use(errorRoute.error404Route);

// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});