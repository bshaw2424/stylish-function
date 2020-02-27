const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const database = require("./mongoDatabase");
const productsModel = require("./models/products");
const path = require("path");
const PORT = process.env.PORT || 3000;

// imported routes
const adminIndex = require("./routes/admin/adminIndexRoutes");
const adminSeating = require("./routes/admin/adminSeatingRoutes");
const adminTables = require("./routes/admin/adminTableRoutes");
const seatingRoutes = require("./routes/seating/seatingRoutes");
const tableRoutes = require("./routes/table/tableRoutes");
const staticRoutes = require("./routes/index/staticRoutes");
const errorRoutes = require("./routes/index/errorRoute");

// middleware
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use("/admin", adminIndex, adminSeating, adminTables);
app.use("/category", seatingRoutes, tableRoutes);
app.use("/", staticRoutes);
app.use(errorRoutes.errorMessage);

app.listen(PORT, () => console.log(`Server on ${PORT}`));
