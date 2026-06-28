const express = require("express");
const authoControlles = require("../controllers/auth.controller");


const router = express.Router();

router.post("/register", authoControlles.registerUser);


router.get("/test", (req, res) => {
  console.log("Cookies : ", req.cookies)

  res.json({
    message: "This is a cookies",
    cookies: req.cookies
  })
});


module.exports = router;