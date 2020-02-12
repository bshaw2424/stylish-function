const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const express = require('express');
const dataBaseConnection = require('./mongodb_connect');
const { seatingModel, tableModel } = require('./models/seatingTableProductModel');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const adminRoutes = require('./routes/admin/adminProductRoutes');
const featured = require('./routes/featuredRoutes');
const seatingRoutes = require('./routes/seating/seatingRoutes');
const tableRoutes = require('./routes/table/tableRoutes');
const static = require('./routes/index/staticRoutes');
const errorRoutes = require('./routes/index/errorRoute');


// middleware
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// route middleware
app.use("/admin", adminRoutes);
app.use("/category", seatingRoutes, tableRoutes);
app.use("/admin/featured", featured);
app.use("/", static);
app.use(errorRoutes.errorMessage);

// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});