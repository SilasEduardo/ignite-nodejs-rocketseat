;const Account = require('../models/Account');

exports.createAccount = async (req, res) => {
    const account = new Account(req.body)
    await account.createAccount();
    if(account.errors.length > 0 )return res.status(400).send(account.errors);
    
    res.send("Salvo com sucesso")  
}