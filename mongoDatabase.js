const mongoose = require("mongoose");
const ENV = require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const MONGODB_URL = `mongodb+srv://bshaw-stylefunction:${password}@cluster0.3kkqi.mongodb.net/${user}`;

const databaseConnection = mongoose
	.connect(MONGODB_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database connected"))
	.catch((err) => console.log(`Error: ${err.message}`));

module.exports = databaseConnection;
