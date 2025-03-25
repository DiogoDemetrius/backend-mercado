const mongoose = require('mongoose');

const ProdutoLojaSchema = new mongoose.Schema({
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
    valor: {
        type: Number,
        required: true
    }
})

const ProdutoLoja = mongoose.model('ProdutoLoja', ProdutoLojaSchema, 'produtos_loja');

module.exports = ProdutoLoja;