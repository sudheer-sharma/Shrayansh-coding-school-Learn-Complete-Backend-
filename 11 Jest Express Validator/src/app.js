const express = require("express");

const app = express();

// app.use(express.json());


// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Get api Test successfuly"
//   })
// })



app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
})



module.exports = app;