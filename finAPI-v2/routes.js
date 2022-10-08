const express = require('express');
const createAccount = require('./src/controllers/createAcoont')

const routes = express.Router()

routes.post('/account', createAccount.createUser)

module.exports = routes