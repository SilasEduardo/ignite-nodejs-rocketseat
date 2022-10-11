const express = require('express');
const routes = express.Router();
const {v4: uuidv4} = require('uuid')
const bd_accounts = []
routes.use(express.json())


routes.post('/account', (req, res)=>{
    const {cpf, name} = req.body;

    const userCPFexistent = bd_accounts.some((customer) => customer.cpf === cpf);

    if(userCPFexistent)return res.status(400).json({
        "Error": "custumer alread exists"
    });

    bd_accounts.push({
        cpf,
        name,
        id: uuidv4(),
        statemet: []
    })

    res.status(201).send(bd_accounts)
});


routes.get('/statemet/:cpf', (req, res)=>{
    const {cpf} = req.params;

    const customer = bd_accounts.find((customer) => customer.cpf === cpf);

    if(!customer)return res.status(400).json({"Erro": "Customer no exist"});
   

    return res.status(201).json(customer.statemet)

})

module.exports = routes
