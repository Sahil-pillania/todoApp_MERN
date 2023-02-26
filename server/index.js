const db = require("./db.js");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
require("dotenv").config({ path: "./.env" });

app.use(express.json());
app.use(cors());
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// PORT
const port = process.env.PORT;
// database connection
db();
// Routes
app.use(require("./routes/note.js"));

app.listen(port, () => {
  console.log(`todo app listening on port ${port}`);
});
