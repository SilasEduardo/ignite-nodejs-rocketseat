const express = require('express');
const routes = express.Router();
const {v4: uuidv4} = require('uuid')
const bd_accounts = []
routes.use(express.json())


function verifyquiExistCPF(req, res, next){
    const {cpf} = req.headers;

    const custumer = bd_accounts.find((customer) => customer.cpf === cpf)

    if(!custumer)return res.status(400).json({"Error": "Customer not found"})

    req.customer = custumer

    return next()
}

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
        statemet: [
            {
                saldo: 0
            }
        ]
    })

    res.status(201).send(bd_accounts)
});


routes.get('/statemet', verifyquiExistCPF, (req, res)=>{
     const {customer} = req

    return res.status(201).json(customer.statemet)

})



module.exports = routes
