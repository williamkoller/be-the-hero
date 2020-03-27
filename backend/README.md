# Backend

Rota / Recurso

- Métodos HTTP:
- GET: Buscar uma informação do back-end
- POST: Criar uma informação no back-end
- PUT: Alterar uma informação no back-end
- DELETE: Deletar uma informação no back-end

* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota depois "?" (Filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizada para criar ou alterar recursos

- SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL SErver
- NoSQL: MongoDB, CouchDB

* Driver: SELECT \* FROM Users
* Query Builder:

```
const express = require("express");
const morgan = require('morgan');

const app = express();

const port = 3000;

app.use(morgan('dev'));
app.use(express.json());


app.post("/users", (request, response) => {
  const body = request.body;

  console.log(body);

  return response.send({
    event: "Semana OmniStack Eleven",
    student: "William Koller"
  });
});

app.listen(port, (req, res) => {
  console.log(`server running ${port}`);
});
```
