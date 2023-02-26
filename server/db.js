require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const URL = process.env.DATABASE_URL;
// console.log("url of database is ------------------", URL);

// mongoose.connect(URL);
// mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    mongoose.set("strictQuery", true);
    console.log(`mongo database is connected!!! ${conn.connection.host} `);
  } catch (error) {
    console.error(`Error: ${error} `);
    process.exit(1); //passing 1 - will exit the proccess with error
  }
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = connectDB;
