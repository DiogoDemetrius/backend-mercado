const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Cliente = mongoose.model('Cliente', ClienteSchema, 'clientes');

module.exports = Cliente;