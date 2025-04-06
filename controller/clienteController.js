const Cliente = require('../model/cliente');
const clienteServices = require('../services/clienteServices');

module.exports = {

    // POST
    async postCliente(req, res) {
        const { nome, cpf, email, telefone } = req.body;

        if (!nome || !cpf || !email || !telefone) {
            return res.status(401).json({ message: 'Todos os campos (nome, cpf, email, telefone) são obrigatórios.' });
        }

        try {
            const cliente = await clienteServices.postCliente({ nome, cpf, email, telefone });
            return res.status(201).json(cliente);
        } catch (error) {
            if (error.code === 11000) { // Erro de duplicidade no MongoDB
                return res.status(400).json({ message: 'Cliente já registrado.' });
            }
            return res.status(500).json({ message: 'Erro ao registrar cliente.', error: error.message });
        }
    },

    // GET
    async getTodosClientes(req, res) {
        try {
            const clientes = await clienteServices.getTodosClientes();
            return res.status(200).json(clientes);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar clientes.', error: error.message });
        }
    },

    async getCliente(req, res) {
        const cpf = req.params.cpf;
        try {
            const cliente = await clienteServices.getCliente(cpf);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar cliente.', error: error.message });
        }
    },

    async getClienteByEmail(req, res) {
        const email = req.params.email;
        try {
            const cliente = await clienteServices.getClienteByEmail(email);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar cliente por email.', error: error.message });
        }
    },

    async getClienteByNumber(req, res) {
        const telefone = req.params.telefone;
        try {
            const cliente = await clienteServices.getClienteByNumber(telefone);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar cliente por telefone.', error: error.message });
        }
    },

    // PUT
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
            return res.status(500).json({ message: 'Erro ao atualizar email do cliente.', error: error.message });
        }
    },

    async putNumberCliente(req, res) {
        const cpf = req.params.cpf;
        const { telefone } = req.body;

        if (!cpf) {
            return res.status(400).json({ message: 'CPF é obrigatório.' });
        }
        if (!telefone) {
            return res.status(400).json({ message: 'Telefone é obrigatório.' });
        }

        try {
            const cliente = await clienteServices.putNumberCliente(cpf, telefone);

            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar telefone do cliente.', error: error.message });
        }
    },

    // DELETE
    async deleteCliente(req, res) {
        const cpf = req.params.cpf;
        try {
            const cliente = await clienteServices.deleteCliente(cpf);

            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            return res.status(200).json({ message: 'Cliente deletado com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar cliente.', error: error.message });
        }
    },

    async deleteClienteByEmail(req, res) {
        const email = req.params.email;
        try {
            const cliente = await clienteServices.deleteClienteByEmail(email);

            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            return res.status(200).json({ message: 'Cliente deletado com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar cliente por email.', error: error.message });
        }
    },

    async deleteClienteByNumber(req, res) {
        const telefone = req.params.telefone;
        try {
            const cliente = await clienteServices.deleteClienteByNumber(telefone);

            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            return res.status(200).json({ message: 'Cliente deletado com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar cliente por telefone.', error: error.message });
        }
    }
};