const { count } = require('console');
const { response } = require('express');
const express = require('express');
const {v4: uuidv4} = require("uuid")
const app = express();

const customers = [];

app.use(express.json())
/*
# CPF - string;
# name - String;
# id - UUID;
# Statement [];
*/

app.post("/account", (req, res)=>{
    const {cpf, name} = req.body;
    const customerAlreadyExists = customers.some((customer)=>customer.cpf === cpf);
    if(customerAlreadyExists){
        return res.status(400).json({
            erro: "Customer Already Exists!"
        });
    }
    

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: [],
    });

    return res.status(201).send();

})



app.get('/statement/:cpf', (req, res)=>{
    const {cpf} = req.params;

    const customer = customers.find(customer => customer.cpf === cpf);

    return res.json(customer.statement)
})

app.listen(3333);