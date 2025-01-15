const { body } = require("express-validator");

const handleEmptyBody = () => {
  return [
    body("selecao")
      .notEmpty()
      .isString()
      .withMessage("O campo seleção é obrigatório"),
    body("grupo")
      .notEmpty()
      .isString()
      .withMessage("O campo grupo é obrigatório"),
  ];
};

module.exports = handleEmptyBody;
