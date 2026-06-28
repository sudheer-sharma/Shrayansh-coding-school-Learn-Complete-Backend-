const express = require("express");
const nodeModel = require("./models/note.model");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());


// post 
app.post("/notes", (req, res) => {
  const data = req.body;
  nodeModel.create({
    title: data.title,
    discription: data.discription
  })

  res.status(201).json({
    message: "node successfuly create"
  })
});


// get 
app.get("/notes", async (req, res) => {
  let notes = await nodeModel.find();

  res.status(200).json({
    message: "node successfuly fetch",
    notes: notes
  })
})


// Delete
app.delete("/notes/:id", async (req, res) => {
  let id = req.params.id;
  await nodeModel.findOneAndDelete({ _id: id });
  res.status(200).json({
    message: "node successfuly Delete",
  })
})


// patch
app.patch("/notes/:id", async (req, res) => {
  let id = req.params.id
  let discription = req.body.discription;
  let title = req.body.title;

  await noteModel.findByIdAndUpdate({ _id: id }, { discription: discription, title: title })

  res.status(200).json({
    message: "Update Successfuly"
  })
})



module.exports = app;