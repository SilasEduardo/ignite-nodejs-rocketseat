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

function getBalance(statement){
   const balance =statement.reduce((acc, operation)=>{
        if(operation.type === 'credit') {
            return acc += operation.amount
        }else{
            return acc -= operation.amount
        }
   }, 0);

   return balance
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

});


//Estrato Bancario
app.get('/statement/', verifyIfExistsAccountCPF, (req, res)=>{

    const { customer} = req;
  
    return res.json(customer.statement) // Buscando Estrado
});



// Depositar
app.post("/deposit", verifyIfExistsAccountCPF, (req, res)=>{
    const {description, amount} = req.body;

    const { customer} = req;

    const statementOperation = {
        description: description,
        amount: amount,
        created_at: new Date(),
        type: "credit",
    }

    customer.statement.push(statementOperation);

    return res.status(201).json({
        "msg": "Deposito feito com sucesso!"
    })

});



//Saque
app.post('/withdraw', verifyIfExistsAccountCPF, (req, res)=>{
    const {customer} = req;
    const { amount } = req.body;

    const balance = getBalance(customer.statement)

    if(balance < amount){
        return res.status(400).json({erro: "Saldo insuficiente"})
    };

    const statementOperation ={
        amount,
        created_at: new Date(),
        type: "debit"
    };

    customer.statement.push(statementOperation)

    return res.status(201).json({
        "msg": "Saque efetuado con sucesso!"
    })
});

//Estrato por Data
app.get('/statement/date', verifyIfExistsAccountCPF, (req, res)=>{
    const { customer} = req;
    const { date } = req.query;

    const dateFormat = new Date(date + " 00:00");

    const statement = customer.statement.filter((statement)=> statement.created_at.toDateString() === new Date(dateFormat).toDateString())


  
    return res.json(statement) // Buscando Estrado
});


// Atualização de Conta
app.put("/account", verifyIfExistsAccountCPF, (req, res)=>{
    const {name} = req.body;
    const {customer} = req;


    customer.name = name;

    return res.status(201).json({
        "msg": "Atualizado com sucesso"
    })
})

// Obiter Dados da conta
app.get("/account", verifyIfExistsAccountCPF, (req, res)=>{
    const {  customer } = req;


    return res.status(200).json(customer)

    
})

// Deletar conta
app.delete("/account", verifyIfExistsAccountCPF, (req, res)=>{
    const {  customer } = req;

    customers.splice(customer, 1);

    return res.status(204).json({
        'mes': "Deletado consucesso"
    })

})

//buscar Banlance
app.get("/balance", verifyIfExistsAccountCPF, (req, res)=>{
    const {customer} = req;

    const balance = getBalance(customer.statement)

    return res.json(balance)



})


app.listen(3333)
