const jwt = require("jsonwebtoken");


async function authArtist(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorize 1"
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRATE);

    if (decoded.role !== "artist") {
      return res.status(403).json({ message: "You don't have access" })
    }

    req.user = decoded;

    next();

  } catch (err) {
    console.log(arr)
    return res.status(401).json({
      message: "Unauthorize 2"
    })
  }
}


async function authUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorize 1"
    })
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRATE);

    if (decoded.role !== "user") {
      return res.status(403).json({ message: "You don't have access" })
    }

    req.user = decoded;

    next();

  } catch (err) {
    console.log(arr)
    return res.status(401).json({
      message: "Unauthorize 2"
    })
  }

}



module.exports = { authArtist, authUser };