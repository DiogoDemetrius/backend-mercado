const mongoose = require('mongoose');

const GalpaoSchema = new mongoose.Schema({
    n_gapao: {
        type: Number,
        required: true,
        unique: true
    },
    uf: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    dt_reabastecimento: {
        type: Date,
        required: true
    },
    dt_retirada: {
        type: Date,
        required: true
    }
})

const Galpao = mongoose.model('Galpao', GalpaoSchema, 'galpoes');

module.exports = Galpao;