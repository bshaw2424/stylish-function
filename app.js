const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const router = express.Router({
    mergeParams: true
});
const dbConnect = require('./mongodb_connect');
const app = express();
const PORT = process.env.PORT || 8080;
const {
    seatingRoutes,
    storageRoutes,
    tableRoutes
} = require('../controllers/mainController');
// const storageRoutes = require('./routes/storageController');
// const tableRoutes = require('./routes/tableController');
const index = require('./routes/indexRoute');
const staticRoute = require('./routes/staticRoutes');


// middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', index, staticRoute);
app.use('/seating', seatingRoutes);
app.use('/storage', storageRoutes);
app.use('/tables', tableRoutes);


// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});