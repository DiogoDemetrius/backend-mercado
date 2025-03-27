const clienteServices = require('../services/clienteServices');

module.exports = {
    async postCliente(req, res) {
        const clienteData = req.body;
        try {
            const cliente = await clienteServices.postCliente(clienteData);
            return res.status(201).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}