const mongoose = require('mongoose')

const {Schema, Types: {ObjectId}} = mongoose


const AccountSchema = new Schema({
    cpf: {type: String, required: true},
    name: {type: String, required: true},
    statement: {type: Array, required: true}
})

const AccountModal = mongoose.model('Account', AccountSchema)


module.exports = AccountModal;