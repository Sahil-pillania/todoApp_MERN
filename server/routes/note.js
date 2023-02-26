const Note = require("../models/noteSchema");
const express = require("express");
var bodyParser = require("body-parser");
const router = express.Router();
const app = express();
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });
// define the note save page route
router.post("/save", async (req, res) => {
  const { title, website, imagelink, note, done } = req.body;

  if (!title || !website || !imagelink || !note) {
    return res
      .status(422)
      .json({ error: "please fill all the fields properly" });
  }

  const newNote = await Note({ title, website, imagelink, note, done });
  const response = newNote.save();

  if (response) {
    return res.status(201).json({ message: "Note saved succesfully." });
  } else {
    return res
      .status(500)
      .json({ error: "Failed to save the note! Try again." });
  }
});
// all notes route
router.get("/allnotes", async (req, res) => {
  try {
    const notes = await Note.find({});

    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured !");
  }
});

// route for updating the note
router.post("/updatenote/:id", async (req, res) => {
  try {
    let note1 = await Note.find({ _id: req.params.id });
    let note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: { ...note1, done: true } },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured !");
  }
});
// route for deleting the note
router.post("/deletenote/:id", async (req, res) => {
  try {
    let note = await Note.findByIdAndDelete({ _id: req.params.id });

    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured !");
  }
});

module.exports = router;
