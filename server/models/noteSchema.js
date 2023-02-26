const mongoose = require("mongoose");
// const { Schema } = mongoose;

const noteSchema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  websitelink: String,
  imagelink: String,
  note: String,
  done: Boolean,
  date: { type: Date, default: Date.now },
});
const Note = mongoose.model("note", noteSchema);
module.exports = Note;
