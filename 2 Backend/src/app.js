const express = require("express");
const app = express();

app.use(express.json());

const notes = [];

// Post
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(200).json({
    message: "Post Data successfuly"
  })
});


// Get
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Get Data successfuly",
    notes: notes
  })
})


// Delete
app.delete("/notes/:id", (req, res) => {
  let id = req.params.id;

  delete notes[id];

  res.status(200).json({
    message: "Delete Data successfuly",
  })
})


// Patch
app.patch("/notes/:id", (req, res) => {
  let id = req.params.id;
  let { title, discription } = req.body;

  notes[id] = { title, discription };

  res.status(200).json({
    message: "Delete Data successfuly",
  })
})


module.exports = app;
