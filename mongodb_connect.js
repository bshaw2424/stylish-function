const mongoose = require("mongoose");
const ENV = require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

// database environment and url variables
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const MONGODB_URL = `mongodb://${user}:${password}@ds145694.mlab.com:45694/affiliate_products`;

// mlab database connection promise call
const db = mongoose
	.connect(MONGODB_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database connected"))
	.catch(err => console.log(`Error: ${err}`));

module.exports = db;
