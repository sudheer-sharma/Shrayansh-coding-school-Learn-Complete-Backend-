const { body, validationResult } = require("express-validator");


async function validateResult(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();

}


const registerUserValidationResult = [
  body("username")
    .isString()
    .withMessage("user must be a string")
    .isLength({ min: 3, max: 20 })
    .withMessage("user must be netween 3 to 20charactor"),

  validateResult
]