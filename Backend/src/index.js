const express = require('express'); //importacao das funcionalidades express para a variavel express
const cors = require('cors'); 
const routes = require('./routes');

const app = express(); //criacao da aplicacao

app.use(cors());  //como esta em desenvolvimento vou deixar assim, quando for para producao vou utilizar o origin: 'http://meuapp.com' informando qual endereco podera acessar minha aplicacao
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * app.get ('/users', (request, response)=> //rota apt.get, acessando o recurso /users
 */

/** 
 * Métodos HTTP:
 * 
 * Get: Busca/listar uma informação do back-end
 * Post: Criar uma informação no back-end
 * Put: Alterar uma informação no back-end
 * Delete: Deletar uma informação no back-end
*/

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos o "?", servem para filtros ou paginacao
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333); //aplicacao esta ouvindo essa porta