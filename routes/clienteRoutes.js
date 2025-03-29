const clienteController = require('../controller/clienteController');
const express = require('express');

const router = express.Router();

//POST
router.post('/registro', clienteController.postCliente);

//GET
router.get('/clientes', clienteController.getTodosClientes);
router.get('/consulta/:cpf', clienteController.getCliente);
router.get('consulta/:email', clienteController.getClienteByEmail);
router.get('consulta/:telefone', clienteController.getClienteByNumber);

//PUT
router.put('/atualiza/email/:cpf', clienteController.putEmailCliente);
router.put('/atualiza/telefone/:cpf', clienteController.putNumberCliente);

module.exports = router;