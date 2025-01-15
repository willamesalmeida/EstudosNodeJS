const mysql = require("mysql")
const conexao = mysql.createConnection({
  host: 'localhost',
  port: "3306",
  user: 'root',
  password: 'wia@root',
  database: "bdcopa"
})

module.exports = conexao;