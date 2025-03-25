const mongoose = require('mongoose');

const CompraSchema = new mongoose.Schema({
    id_compra: {
        type: Number,
        required: true,
        unique: true
    },
    id_cliente: {
        type: Number,
        required: true
    },
    id_funcionario: {
        type: Number,
        required: true
    },
    produtos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProdutoLoja',
            required: true
        }
    ],
    valor_total: {
        type: Number,
        required: true
    },
    dt_compra: {
        type: Date,
        required: true
    }
});

const Compra = mongoose.model('Compra', CompraSchema, 'compras');

module.exports = Compra;