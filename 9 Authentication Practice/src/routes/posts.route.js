const express = require("express");


const router = express.Router();


router.post("/creates", (req, res) => {
  console.log(req.body);

  console.log(req.cookies);

  res.send("Create data");
})


module.exports = router;