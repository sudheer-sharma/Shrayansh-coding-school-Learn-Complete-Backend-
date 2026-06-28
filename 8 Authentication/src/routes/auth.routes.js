const express = require("express");
const authController = require("../controllers/auth.controller");


const router = express.Router();


// Post route
router.post("/register", authController.registerUser);


// Get route
router.get("/test", (req, res) => {
  console.log("Cookies : ", req.cookies);

  res.json({
    message: "Get data successfuly",
    Cookies: req.cookies
  })
})


module.exports = router;