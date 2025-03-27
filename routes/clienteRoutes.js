const clienteController = require('../controller/clienteController');
const express = require('express');

const router = express.Router();

router.post('/registro', clienteController.postCliente);

module.exports = router;