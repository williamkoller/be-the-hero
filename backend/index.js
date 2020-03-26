const express = require("express");

const app = express();

const port = 3000;

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota depois "?" (Filtros, paginação) 
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos
  */
app.post("/users/:id", (request, response) => {
  const params = request.params;

  console.log(params);
  return response.send({
    event: "Semana OmniStack Eleven",
    student: "William Koller"
  });
});

app.listen(port, (req, res) => {
  console.log(`server running ${port}`);
});
