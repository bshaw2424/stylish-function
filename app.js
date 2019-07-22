const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const router = express.Router({
    mergeParams: true
});
const dbConnect = require('./mongodb_connect');
const app = express();
const PORT = process.env.PORT || 8080;
const index = require('./routes/indexRoute');
const staticRoute = require('./routes/staticRoutes');
// const staticRoutes = require('./routes/staticRoutes');
// const indexRoute   = require('./routes/index');

// middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', index, staticRoute);
app.use(require('./routes/productRoute'));


// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});