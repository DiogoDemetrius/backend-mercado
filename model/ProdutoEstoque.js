const mongoose = require('mongoose');

const ProdutoEstoqueSchema = new mongoose.Schema({
    id_produto: {
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    valida: {
        type: Date,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    galpao: {
        type: Number,
        required: true
    }
})

const ProdutoEstoque = mongoose.model('ProdutoEstoque', ProdutoEstoqueSchema, 'produtos_estoque');

module.exports = ProdutoEstoque;