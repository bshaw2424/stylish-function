const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router({
    mergeParams: true
});
const databasBaseConnection = require('./mongodb_connect');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes/mainRoutes');
const mainIndexRoute = require('./routes/indexRoute');

// middleware
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', mainIndexRoute);
app.use('/seating', routes.seatRouter);
app.use('/storage', routes.storageRouter);
app.use('/tables', routes.tableRouter)

// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});