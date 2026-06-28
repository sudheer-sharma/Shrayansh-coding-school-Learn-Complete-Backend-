const express = require("express");
const noteModel = require("./model/note.model");
const app = express();

app.use(express.json());

// post
app.post("/notes", async (req, res) => {
  let data = req.body;

  await noteModel.create({
    title: data.title,
    description: data.description
  })

  res.status(200).json({
    message: "Post Data successfuly"
  })
})


// Get
app.get("/notes", async (req, res) => {

  let notes = await noteModel.find();

  res.status(200).json({
    message: "Get Data succeseefuly",
    notes: notes
  })

})


// delete 
app.delete("/notes/:id", async (req, res) => {
  let id = req.params.id;

  await noteModel.findOneAndDelete({ _id: id });

  res.status(200).json({
    message: "Data Delete successfuly"
  })

})


//Path
app.patch("/notes/:id", async (req, res) => {
  let id = req.params.id;
  let { title, description } = req.body;

  await noteModel.findOneAndUpdate({ _id: id }, {
    title: title,
    description: description
  })

  res.status(200).json({
    message: "Update Data successefuly"
  })
})


module.exports = app;