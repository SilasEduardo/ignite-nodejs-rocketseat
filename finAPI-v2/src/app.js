const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.send('Chegei aqui')
})

module.exports = routes
