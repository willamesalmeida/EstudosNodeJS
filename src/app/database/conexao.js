import mysql from "mysql"
/* const mysql = require("mysql"); */

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "wia@root",
  database: "bdcopa",
});

conexao.connect();
/**
 * Executa um codigo SQL comou sem valores
 * @param {string} sql instrunção SQL a ser executada
 * @param {string=id | [selecao, id]} valores a serem passadaos para o SQL
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da PROMISE
 */

export const querysConsult = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (err, result) => {
      if (err) {
        return reject(mensagemReject);
      } else {
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      }
    });
  });
};

export default {conexao, querysConsult}


/*module.exports = { conexao, querysConsult }; */
