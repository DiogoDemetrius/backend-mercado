const clienteController = require('../controller/clienteController');
const express = require('express');

const router = express.Router();

//POST
router.post('/registro', clienteController.postCliente);

//GET
router.get('/consulta/:cpf', clienteController.getCliente);
router.get('consulta/:email', clienteController.getClienteByEmail);
router.get('consulta/:telefone', clienteController.getClienteByNumber);

module.exports = router;