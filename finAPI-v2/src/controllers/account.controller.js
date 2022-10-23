const Account = require('../models/Account');
const {v4: uuidv4} = require('uuid')

exports.createAccount = async (req, res) => {
    try{
        
        const {body} = req

        await Account.create(body)
        res.status(201).send('Salvo con sucesso')
    }catch(e){
        res.status(500).send(`Erro: ${e}`)
    }
    
}