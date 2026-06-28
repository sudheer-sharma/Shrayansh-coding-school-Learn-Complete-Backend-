const express = require("express");
const postModule = require("./module/post.module");
const multer = require("multer");
const uploadFile = require("./services/storage.service").default;
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ Storage: multer.memoryStorage() });


// Post
app.post("/create_post", upload.single("image"), async (req, res) => {
  // console.log(req.body)
  // console.log(req.file)

  const result = await uploadFile(req.file.buffer);

  const post = await postModule.create({
    image: result.url,
    caption: req.body.caption
  })

  res.status(201).json({
    message: 'Post created siccessfuly',
    post
  })
})


// Get
app.get("/create_get", async (req, res) => {

  let posts = await postModule.find();

  res.status(200).json({
    message: 'Get Data siccessfuly',
    posts
  })
})



module.exports = app;