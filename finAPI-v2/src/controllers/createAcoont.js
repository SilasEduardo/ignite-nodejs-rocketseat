const bdBank = require('../../server')
const  {v4: uuid} = require('uuid');

exports.createUser = (req, res) =>{
   const {cpf, name} = req.body;
   const userId = uuid()

   bdBank.bd.push({
    cpf,
    name,
    userId,
    statements: []
   })

  return res.status(201).send(bdBank)
}