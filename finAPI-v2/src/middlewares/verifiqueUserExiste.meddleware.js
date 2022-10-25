const Account = require('../models/Account')
exports.userexist = (req, res, next) => {
    const account = new Account()

    account.Account.create({
        "cpf": "522544422",
        "name": "vindo da me",
      "email": "silas@gmail.com",
      "senha": "fffff"
   })

   next()
}