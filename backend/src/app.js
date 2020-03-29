const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * GET: Buscar uma informação no back-end.
 * POST: Criar uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 */
module.exports = app;
