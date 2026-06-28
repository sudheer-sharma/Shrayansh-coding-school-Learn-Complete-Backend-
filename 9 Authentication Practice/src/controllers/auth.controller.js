const userModule = require("../module/user.module");
const jwt = require("jsonwebtoken");


async function registerUser(req, res) {
  let { username, email, password } = req.body;

  let autherRegister = await userModule.findOne({ email });

  if (autherRegister) {
    return (
      res.status(409).json({
        message: "This email allready exist"
      })
    )
  }

  let userData = await userModule.create({ username, email, password });

  let token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({
    message: "data successfuly create",
    userData,
    token
  })
}

module.exports = { registerUser };