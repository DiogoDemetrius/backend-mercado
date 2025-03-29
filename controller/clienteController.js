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
    async getTodosClientes(req, res) {
        try {
            const clientes = await clienteServices.getTodosClientes();
            return res.status(200).json(clientes);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

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
    },

    //PUT
    async putEmailCliente(req, res) {
        const cpf = req.params.cpf;
        const { email } = req.body;

        if (!cpf) {
            return res.status(400).json({ message: 'CPF é obrigatório.' });
        }
        if (!email) {
            return res.status(400).json({ message: 'Email é obrigatório.' });
        }

        try {
            const cliente = await clienteServices.putEmailCliente(cpf, email);

            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    
}