import express from "express";
import routes from './routes.js'
//import SelecaoController from "./app/controllers/SelecaoController.js";

/* import conexao from "./app/database/conexao"; */

/* const express = require("express");
const conexao = require("./app/database/conexao");
const SelecaoController = require("./app/controllers/SelecaoController.js") 


const validate = require("./middleware/handleValidation");
const emptyValidation = require("./middleware/handleReqEmpty");
*/

const app = express();

// server para fazer o servidor entender dados do tipo JSON que vem no corpo da requisição
app.use(express.json());

//usar o router
app.use(routes);


/* //Captura o elemento pelo id
const searchForId = (id) => {
  return selecoes.filter((selecoes) => selecoes.id == id);
};

//captura o index de onde o elemento esta no array
const searchForIndexSoccerTeam = (id) => {
  return selecoes.findIndex((selecoes) => selecoes.id == id);
}; */

export default app;

/* module.exports = app; */
