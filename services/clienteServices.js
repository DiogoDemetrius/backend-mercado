const Cliente = require('../model/cliente');
const mongoose = require('mongoose');

const clienteServices = {
    async postCliente(clienteData) {
        const cliente = new Cliente(clienteData);
        return await cliente.save();
    }
}