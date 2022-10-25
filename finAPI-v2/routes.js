const express = require('express');
const routes = express.Router()
const accountCotrller = require('./src/controllers/account.controller')

routes.use(express.json())


routes.post('/account', accountCotrller.createAccount)
routes.post('/account', accountCotrller.createAccount)


module.exports = routes;