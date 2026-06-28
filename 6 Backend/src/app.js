const express = require("express");
const notesModel = require("./model/post.module");
const uploadFile = require("./services/storage.service").default;
const multer = require("multer");

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });



// // Post
app.post("/create_post", upload.single("image"), async (req, res) => {

  let result = await uploadFile(req.file.buffer);

  let post = await notesModel.create({
    image: result.url,
    discription: req.body.discription
  })

  res.status(201).json({
    message: "Post Data successfuly",
    post
  })

})


// Get
app.get("/create_get", async (req, res) => {

  let post = await notesModel.find();

  res.status(200).json({
    message: "Get dat successfuly",
    post
  });

})


// Patch
app.patch("/create_patch/:id", async (req, res) => {
  let id = req.params.id;
  let { image, discription } = req.body;

  let result = notesModel.findByIdAndUpdate({ _id: id }, {

  })

})



// app.post("/create_post", async (req, res) => {
//   let data = req.body;

//   await notesModel.create({
//     title: data.title,
//     discription: data.discription
//   })

//   res.status(201).json({
//     message: "Post Data"
//   })

// })


// app.get("/create_post", async (req, res) => {

//   let post = await notesModel.find();

//   res.status(200).json({
//     message: "Post Data",
//     post
//   })
// })


// app.patch("/create_post/:id", async (req, res) => {
//   let id = req.params.id;
//   let { title, discription } = req.body;

//   await notesModel.findByIdAndUpdate({ _id: id }, {
//     title: title,
//     discription: discription
//   });

//   res.status(201).json({
//     message: "patch Data",
//   })
// })


// app.delete("/create_post/:id", async (req, res) => {
//   let id = req.params.id;

//   await notesModel.findByIdAndDelete({ _id: id });

//   res.status(201).json({
//     message: "delete Data",
//   })

// })

module.exports = app;