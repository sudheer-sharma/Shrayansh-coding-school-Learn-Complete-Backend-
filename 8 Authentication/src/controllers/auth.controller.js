const userModel = require("../models/user.module");
const jwt = require("jsonwebtoken");


async function registerUser(req, res) {
  let { username, email, password } = req.body;

  let isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message: "user alredy esixt"
    })
  }

  let user = await userModel.create({ username, email, password });

  let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

  res.cookie("token", token);

  res.status(201).json({
    message: "user register successfully",
    user,
  })
}


module.exports = { registerUser };