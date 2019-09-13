const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router({
    mergeParams: true
});
const dbConnection = require('./mongodb_connect');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const index = require('./routes/indexRoute');
const routes = require('./routes/mainRoutes');
const error = require('./routes/errorRoute');
const staticRoute = require('./routes/staticRoutes');


// middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', index, staticRoute);
app.use('/category', routes);
app.use('/', error);

// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});