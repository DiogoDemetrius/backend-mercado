const Cliente = require('../model/cliente');
const mongoose = require('mongoose');

const clienteServices = {

    //POST
    async postCliente(clienteData) {
        const cliente = new Cliente(clienteData);
        return await cliente.save();
    },

    //GET
    async getCliente(cpf) {
        const cliente = await Cliente.findOne({ cpf: cpf });
        return cliente;
    },

    async getClienteByEmail(email) {
        const cliente = await Cliente.findOne({ email: email });
        return cliente;
    },

    async getClienteByNumber(telefone) {
        const cliente = await Cliente.findOne({ telefone: telefone });
        return cliente;
    },

    //PUT
    async putEmailCliente(cpf, email) {
        const cliente = await Cliente.findOne({ cpf: cpf });
        cliente.email = email;
        return await cliente.save();
    },

    //DELETE
    async deleteCliente(cpf) {
        return await Cliente.deleteOne({ cpf: cpf });
    },

    async deleteClienteByEmail(email) {
        return await Cliente.deleteOne({ emial: email});
    },

    async deleteClienteByNumber(telefone) {
        return await Cliente.deleteOne({ telefone: telefone  })
    }
}

module.exports = clienteServices;