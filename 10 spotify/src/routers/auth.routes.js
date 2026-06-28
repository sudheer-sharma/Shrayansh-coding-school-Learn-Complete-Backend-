const express = require("express");
const authControlle = require("../controllers/auth.controller");

const router = express.Router();


router.post("/register", authControlle.userRegister);

router.post("/login", authControlle.userLogin);

router.post("/logout", authControlle.logoutUser);


module.exports = router;