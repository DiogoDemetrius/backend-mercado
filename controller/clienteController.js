const clienteServices = require('../services/clienteServices');

module.exports = {

    //POST
    async postCliente(req, res) {
        const clienteData = req.body;
        try {
            const cliente = await clienteServices.postCliente(clienteData);
            return res.status(201).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    
    //GET
    async getCliente(req, res) {
        const cpf = req.params.cpf;
        try {
            const cliente = await clienteServices.getCliente(cpf);
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async getClienteByEmail(req, res) {
        const email = req.params.email;
        try {
            const cliente = await clienteServices.getClienteByEmail(email);
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async getClienteByNumber(req, res) {
        const telefone = req.params.telefone;
        try {
            const cliente = await clienteServices.getClienteByNumber(telefone);
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    //PUT
    
}