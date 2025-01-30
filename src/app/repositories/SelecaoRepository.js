import { querysConsult } from "../database/conexao.js";

/* const { querysConsult } = require("../database/conexao"); */

class SelecaoRepository {
  //Metodos do CRUD

  create(selecao) {
    const sql = `INSERT INTO selecoes SET ?`;
    const mensagemReject = "Não foi possivel cadastrar uma nova seleção";
    return querysConsult(sql, selecao, mensagemReject);
  }

  findAll() {
    const sql = `SELECT * FROM selecoes;`;
    const mensagemReject = "Não foi possivel localizar as selecões";
    return querysConsult(sql, mensagemReject);
  }

  findById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=?;`;
    const mensagemReject = "Não foi possivel encontrar essa seleção";
    return querysConsult(sql, id, mensagemReject);
  }

  update(selecao, id) {
    const sql = `UPDATE selecoes SET ? WHERE id=?;`;
    const mensagemReject = "Não foi possivel atualizar a seleção"
    return querysConsult(sql,[selecao, id], mensagemReject)
  }

  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=?`;
    const mensagemReject = "Não foi possivel apagar a seleção"
    return querysConsult(sql, id, mensagemReject)
  }
}

export default new SelecaoRepository();
/* module.exports = new SelecaoRepository(); */
