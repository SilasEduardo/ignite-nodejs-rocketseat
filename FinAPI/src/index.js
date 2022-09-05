const { count } = require('console');
const { response } = require('express');
const express = require('express');
const {v4: uuidv4} = require("uuid") // Definindo ID

const app = express();
const customers = [];
app.use(express.json()) // Middlerware Json

// Middlerware

function verifyIfExistsAccountCPF(req, res, next) { // Middlerware 
    const {cpf} = req.headers;

    const customer = customers.find(customer => customer.cpf === cpf); // find returna false ou true;

    if(!customer){
        return res.status(400).json({
             erro: "Customer not found"
         });
     }

     req.customer = customer;

     return next()

}


// Criando Conta
app.post("/account", (req, res)=>{
    const {cpf, name} = req.body; // difindo que ele vai receber da bory;
    const customerAlreadyExists = customers.some((customer)=>customer.cpf === cpf); // Ferificando se ja exite uma conta exitente;


    if(customerAlreadyExists){  // Retornado Erro se exitir
        return res.status(400).json({
            erro: "Customer Already Exists!"
        });
    }
    

    // Mocando Usuario;

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: [],
    });

    return res.status(201).json({
        'msg': 'Usuario criado com sucesso.'
    }); 

})



app.get('/statement/', verifyIfExistsAccountCPF, (req, res)=>{

    const { customer} = req;
  
    return res.json(customer.statement)
})

app.listen(3333);