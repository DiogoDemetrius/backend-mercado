const express = require('express');
const connectDB = require('./config/bd');
const cors = require('./config/cors');
const clienteRoutes = require('./routes/clienteRoutes');
require('./config/env');

const app = express();
app.use(express.json());

connectDB();

app.use(cors);

app.use('/cliente', clienteRoutes);

module.exports = app