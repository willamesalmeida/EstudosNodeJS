const conexao = require("../database/conexao");

class SelecaoRepository {
  create(selecao) {
    const sql = `INSERT INTO selecoes SET ?;`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, selecao, (err, result) => {
        if (err) {
          return reject(`Não foi possivel adicionar a seleão. Erro: ${err}`);
        } else {
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }

  findAll() {
    const sql = `SELECT * FROM selecoes;`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, (err, result) => {
        if (err) {
          return reject(`A seleções não foram encontradas. Erro: ${err}`);
        } else {
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }

  findById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=?;`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (err, result) => {
        if (err) {
          return reject(`A seleção não foi encontrada. Erro: ${err}`);
        } else {
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }

  update(id, selecao) {
    const sql = `UPDATE selecoes SET ? WHERE id=?;`
    return new Promise((resolve, reject) => {
      conexao.query(sql, [selecao, id], (err, result) => {
        if (err) {
          return reject(`Não foi possivel atualizar a seleção. Erro: ${err}`)
        } else {
          const row = JSON.parse(JSON.stringify(result))
          return resolve(row)
        }
      });
    })
  }

  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=?`
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (err, result) => {
        if(err){
          return reject(`Não foi possivel deletar a seleção. Erro: ${err}`)
        }else{
          const row = JSON.parse(JSON.stringify(result))
          return resolve(row);
        }
      })
    })
  }
}

module.exports = new SelecaoRepository();
