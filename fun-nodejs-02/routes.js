const express = require('express')
const homeControler = require('./src/controllers/homecontoller')
const routes =express.Router()


routes.get('/', homeControler.paginainicial)



module.exports = routes