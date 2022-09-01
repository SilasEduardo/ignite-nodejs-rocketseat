const { request } = require('express');
const express = require('express');

const app = express()

/*
 # CPF - string
 # name - string 
 # id - uuid
 # stantement []
*/

app.post("/account", (req, res) => {
    const cpf = request.body;

    

})

app.listen(3333)