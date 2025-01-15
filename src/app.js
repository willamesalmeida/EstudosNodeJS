const express = require("express");
const app = express();
/* const validate = require("./middleware/handleValidation");
const emptyValidation = require("./middleware/handleReqEmpty");
 */
app.use(express.json());

//mock
const selecoes = [
  { id: 1, selecao: "Brasil", grupo: "A" },
  { id: 2, selecao: "Alemanha", grupo: "B" },
  { id: 3, selecao: "Argentina", grupo: "C" },
  { id: 4, selecao: "Portugal", grupo: "D" },
];

//Captura o elemento pelo id
const searchForId = (id) => {
  return selecoes.filter((selecoes) => selecoes.id == id);
};

//captura o index de onde o elemento esta no array
const searchForIndexSoccerTeam = (id) => {
  return selecoes.findIndex((selecoes) => selecoes.id == id);
};

//Rota padrão ou rota raiz
app.get("/", (req, res) => {
  console.log("Hello from Express, hello world!");
  res.send("Hello from Express, Olá mundo!");
});

app.get("/selecoes", (req, res) => {
  res.status(200).send(selecoes);
});

app.get("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(searchForId(id));
});

app.post("/selecoes", (req, res) => {
  const id = req.params.id;
  if (id === true) {
    selecoes.push(req.body);
    res.status(201).send("A seleção foi cadastrada com sucesso!");
  } else {
    res.status(400).send("A seleção com id já existe");
  }
});

app.delete("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  const index = searchForIndexSoccerTeam(req.params.id);
  if (index === -1) {
    res.status(404).send("A seleção não foi encontrada");
  } else {
    /* selecoes.filter(selecoes => selecoes.id !== index) */
    selecoes.splice(index, 1)[0];
    res.status(200).send(`A seleção com o ID: ${id} foi excluida com sucesso!`);
  }
});

app.put("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  const index = searchForIndexSoccerTeam(id);
  if (index === -1) {
    res.status(404).send("A seleção não foi encontrada");
  } else {
    /* selecoes.filter(selecoes => selecoes.id !== index) */
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json( selecoes);
  }
});

module.exports = app;
