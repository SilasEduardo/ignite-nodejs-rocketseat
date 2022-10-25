;const Account = require('../models/Account');

exports.createAccount = async (req, res) => {

    try{
        const account = new Account(req.body)
        await account.createAccount();
        if(account.errors.length > 0 )return res.status(400).send(account.errors);
        
        res.send("Salvo com sucesso") 
    }catch(e){
        console.log(e)
    }
     
}


exports.statement = (req, res) =>{
    const account = new Account(req.body)

   res.send(account.statement()) 
}