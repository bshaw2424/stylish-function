const bodyParser = require('body-parser');
const express = require('express');
const dataBaseConnection = require('./mongodb_connect');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/mainRoutes');
const seatingRoutes = require('./routes/seatingRoutes');
const tableRoutes = require('./routes/tableRoutes');
const static = require('./routes/staticRoutes');
const errorRoutes = require('./routes/errorRoute');

const errorRoute = new errorRoutes();

// middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// route middleware
app.use('/', routes, static);
app.use('/seating', seatingRoutes);
app.use('/tables', tableRoutes);
app.use(errorRoute.error404Route);

// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});