const express = require('express');
const connectDB = require('./config/bd');
const cors = require('./config/cors');
const clienteRoutes = require('./routes/clienteRoutes');
const swaggerSetup = require('./swagger');
require('./config/env');

const app = express();
app.use(express.json());

connectDB();

app.use(cors);
swaggerSetup(app);

app.use('/cliente', clienteRoutes);

module.exports = app