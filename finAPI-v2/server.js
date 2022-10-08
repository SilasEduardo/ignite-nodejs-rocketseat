const express = require('express');
const app = express()
const routes = require('./routes')
app.use(express.urlencoded({extends: true}));
app.use(routes)
app.use(express.json())

const bd_clients = []
exports.bd = bd_clients;
const  {v4: uuid} = require('uuid');
exports.id = uuid();



app.listen(3333, ()=>{
    console.log('SERVER ON')
});