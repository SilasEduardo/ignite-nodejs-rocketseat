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
        amount: 0,
        statemet: []
    })

    res.status(201).send(bd_accounts)
});


routes.get('/statemet', verifyquiExistCPF, (req, res)=>{
     const {customer} = req

    return res.status(201).json(customer.statemet)

})

routes.post('/deposit', verifyquiExistCPF, (req, res)=>{
    const {description, amount} = req.body
    const {customer} = req
    

    customer.statemet.push({ 
        description,
        amount,
        date: new Date()
    });
    customer.amount += amount


    res.status(201).json({"msg": "Deposito deposit successfully"})
});


routes.post('/withdraw', verifyquiExistCPF, (req, res)=>{
    const {amount} = req.body
    const {customer} = req
    
    const checkAmount = bd_accounts.some((value) => value.amount >= amount);

    if(!checkAmount) return res.status(404).json({"msg": "not enough parsley"})

    customer.statemet.push({ 
        description: "withdraw",
        amount,
        date: new Date()
    });
    customer.amount -= amount

    res.status(201).json({"msg": "successfully cash out"})
})









module.exports = routes
