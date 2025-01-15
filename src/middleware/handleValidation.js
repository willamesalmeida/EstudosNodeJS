const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty){
    console.log("funcionou, mulé gosto de mais de vc")
    return next();
  }

  const extractedErrors = []

  errors.array().map((err) => extractedErrors.push(err.msg))

  return res.status(422).json({
    errors: extractedErrors,
  })
};

module.exports = validate;