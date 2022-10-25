const mongoose = require('mongoose')
const {v4: uuid} = require('uuid')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const {Schema, Types: {ObjectId}} = mongoose


const AccountSchema = new Schema({
    cpf: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    statement: {type: Array, required: true}
})

const AccountModal = mongoose.model('Account', AccountSchema)

class Account{
    constructor(body){
        this.body = body;
        this.errors = []
    }

    validator(){
        if(!validator.isEmail(this.body.email)) return this.errors.push('Email invalido');
        const salt = bcryptjs.genSaltSync();
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt)
    }

    async createAccount(){
       this.validator()
        this.body = {
             id: uuid(),
             cpf: this.body.cpf,
             name: this.body.name,
             email: this.body.email,
             senha: this.body.senha,
             statement: []
        } 

       await this.userExists()
       if(this.errors.length > 0) return
       await AccountModal.create(this.body)
     }
     async userExists(){
        const user = await AccountModal.findOne({cpf: this.body.cpf});
        if(user) this.errors.push('Usuario já existe')
        return
      }
  
    
}

module.exports = Account