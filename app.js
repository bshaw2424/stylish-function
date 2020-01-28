const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const express = require('express');
const dataBaseConnection = require('./mongodb_connect');
const product = require('./models/productsModel');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/adminProductRoutes');
const featured = require('./routes/featuredRoutes');
const navRoutes = require('./routes/navRoutes');
const static = require('./routes/staticRoutes');
const errorRoutes = require('./routes/errorRoute');


// middleware
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// route middleware
app.use("/admin", routes);
app.use("/category", navRoutes);
app.use("/admin/featured", featured);
app.use("/", static);
app.use(errorRoutes.errorMessage);

// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});