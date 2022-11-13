const express = require('express');
const routes = express.Router()
const accountCotroller = require('./src/controllers/account.controller')

routes.use(express.json())


routes.post('/account', accountCotroller.createAccount)
routes.get('/statement/:id', accountCotroller.statement)


module.exports = routes;