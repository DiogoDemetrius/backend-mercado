const mongoose = require('mongoose');

const EspedienteSchema = new mongoose.Schema({
    id_funcionario: {
        type: Number,
        required: true,
        unique: true
    },
    dt_entrada: {
        type: Date,
        required: true
    },
    dt_saida: {
        type: Date,
        required: true
    },
    saldo_hr: {
        type: Number,
        required: true
    }
})

const Espediente = mongoose.model('Espediente', EspedienteSchema, 'espedientes');

module.exports = Espediente;