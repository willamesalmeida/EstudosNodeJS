import app from "./app.js";

/* const app = require("./app"); */
const PORT = process.env.PORT || 5500;
 
//configuração para funcionar o servidor g
 app.listen(PORT, () => {
  console.log(`Server is running on local adress http://localhost:${PORT}`);
});
