const app = require("./src/app");
const PORT = 5500;

const conexao = require("./infra/conexao.js");

//fazer conexão
conexao.connect((err) => {
  if (err) {
    console.error("Erro de conexão:", err);
  } else {
    console.log("Conexão feita com sucesso");
    //configuração para funcionar o servidor g
    app.listen(PORT, () => {
      console.log(`Server is running on local adress http://localhost:${PORT}`);
    });
  }
});
