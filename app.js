const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const express = require("express");
const dataBaseConnection = require("./mongodb_connect");
const productsModel = require("./models/productModel");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const adminIndex = require("./routes/admin/adminIndexRoutes");
const adminSeating = require("./routes/admin/adminSeatingRoutes");
const adminTables = require("./routes/admin/adminTableRoutes");
const seatingRoutes = require("./routes/seating/seatingRoutes");
const tableRoutes = require("./routes/table/tableRoutes");
const staticRoutes = require("./routes/index/staticRoutes");
const errorRoutes = require("./routes/index/errorRoute");

// middleware
app.use(methodOverride("_method"));
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// route middleware
app.use("/admin", adminIndex, adminSeating, adminTables);
app.use("/category", seatingRoutes, tableRoutes);
app.use("/", staticRoutes);
app.use(errorRoutes.errorMessage);

// server connection
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
