const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.module");


const router = express.Router();


router.post("/create", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unathorize"
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    const userId = await userModel.findById({ _id: decoded.id });

    console.log(userId)

  } catch (err) {
    return res.status(401).json({
      message: "Token is invalid"
    })
  }

  res.send("Post creates successfuly");
});

module.exports = router;