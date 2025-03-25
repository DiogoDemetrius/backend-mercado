const mongoose = require('mongoose');

const FuncionariosSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
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
    },
    cargo: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    }
})

const Funcionario = mongoose.model('Funcionario', FuncionariosSchema, 'funcionarios');

module.exports = Funcionario;