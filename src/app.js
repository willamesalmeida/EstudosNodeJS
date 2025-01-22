const express = require("express");
const conexao = require("../infra/conexao");
const app = express();
/* const validate = require("./middleware/handleValidation");
const emptyValidation = require("./middleware/handleReqEmpty");
 */
app.use(express.json());

//Captura o elemento pelo id
const searchForId = (id) => {
  return selecoes.filter((selecoes) => selecoes.id == id);
};

//captura o index de onde o elemento esta no array
const searchForIndexSoccerTeam = (id) => {
  return selecoes.findIndex((selecoes) => selecoes.id == id);
};

//Rotas
//Rota de get seleções, todas.
app.get("/selecoes", (req, res) => {
  //res.status(200).send(selecoes);
  const sql = "SELECT * FROM selecoes;";
  conexao.query(sql, (err, result, fields) => {
    if (err) {
      res.status(404).json({ erro: err });
    } else {
      res.status(200).send(result);
    }
  });
});

//Rota de get por id da seleção.
app.get("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  /* res.status(200).send(searchForId(id)); */

  //poderia ser feito da seguinte forma:
  //const sql = "SELECT * FROM selecoes WHERE id=?"
  //conexao.query(sql, id, (err, result, fields)=> {...}) passando o id dentro da query como parametros extas e colocando a ? no comando SQL

  const sql = `SELECT * FROM selecoes WHERE id=${id}`;
  conexao.query(sql, (err, result, fields) => {
    const linha = result[0];
    console.log(linha);
    if (err) {
      res.status(404).json({ erro: err });
    } else {
      res.status(200).send(linha);
    }
  });
});

//Rota para adicionar uma nova seleção.
app.post("/selecoes", (req, res) => {
  const selecao = req.body;
  const sql = `INSERT INTO selecoes SET ?;`;
  conexao.query(sql, selecao, (err, result) => {
    if (err) {
      res.status(400).json({ erro: err });
    } else {
      res.status(201).send(result);
    }
  });
  /* if (id === true) {
    selecoes.push(req.body);
    res.status(201).send("A seleção foi cadastrada com sucesso!");
  } else {
    res.status(400).send("A seleção com id já existe");
  } */
});

//Rota para deletar uma seleção, passando um id
app.delete("/selecoes/:id", (req, res) => {
  /*  const id = req.params.id;
  const index = searchForIndexSoccerTeam(req.params.id);
  if (index === -1) {
    res.status(404).send("A seleção não foi encontrada");
  } else {
    //selecoes.filter(selecoes => selecoes.id !== index)
    selecoes.splice(index, 1)[0];
    res.status(200).send(`A seleção com o ID: ${id} foi excluida com sucesso!`);
  } */

  const id = req.params.id;
  const sql = `DELETE FROM selecoes WHERE id=?`;
  conexao.query(sql, id, (err, result) => {
    if (err) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).send(result);
    }
  });
});

//Rota para atualizar uma seleção passando um id
app.put("/selecoes/:id", (req, res) => {
  /* const id = req.params.id;
  const index = searchForIndexSoccerTeam(id);
  if (index === -1) {
    res.status(404).send("A seleção não foi encontrada");
  } else {
    //selecoes.filter(selecoes => selecoes.id !== index) 
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes);
  } */
    const id = req.params.id;
    const selecao = req.body
    const sql = `UPDATE selecoes SET ? WHERE id=?;`
    conexao.query(sql, [selecao, id], (err, result ) =>{
      if (err) {
        res.status(400).json({ erro: erro });
      }
      else{
        res.status(200).json(result)
      }
    })
});

module.exports = app;
