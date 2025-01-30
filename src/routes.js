import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js"

const router = Router();

//Rotas
//Rota de get seleções, todas.
router.get("/selecoes", SelecaoController.index);

//Rota de get por id da seleção.
router.get(
  "/selecoes/:id",
  SelecaoController.show

  /* res.status(200).send(searchForId(id)); */

  //poderia ser feito da seguinte forma:
  //const sql = "SELECT * FROM selecoes WHERE id=?"
  //conexao.query(sql, id, (err, result, fields)=> {...}) passando o id dentro da query como parametros extas e colocando a ? no comando SQL
);

//Rota para adicionar uma nova seleção.
router.post(
  "/selecoes",
  SelecaoController.store

  /* if (id === true) {
    selecoes.push(req.body);
    res.status(201).send("A seleção foi cadastrada com sucesso!");
  } else {
    res.status(400).send("A seleção com id já existe");
  } */
);

//Rota para deletar uma seleção, passando um id
router.delete(
  "/selecoes/:id",
  SelecaoController.delete
  //const id = req.params.id;
  //const index = searchForIndexSoccerTeam(req.params.id);
  //if (index === -1) {
  // res.status(404).send("A seleção não foi encontrada");
  //} else {
  //selecoes.filter(selecoes => selecoes.id !== index)
  // selecoes.splice(index, 1)[0];
  //res.status(200).send(`A seleção com o ID: ${id} foi excluida com sucesso!`);
  //}
);

//Rota para atualizar uma seleção passando um id
router.put(
  "/selecoes/:id",
  SelecaoController.update
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
);

export default router