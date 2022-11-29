const express = require('express');
const routes = express.Router()
const accountCotroller = require('./src/controllers/account.controller')

routes.use(express.json())


routes.post('/account', accountCotroller.createAccount) //controllers 
routes.get('/statement/:id', accountCotroller.statement)// controller


module.exports = routes;
