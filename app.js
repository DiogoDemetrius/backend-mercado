const express = require('express');
const connectDB = require('./config/bd');
const cors = require('./config/cors');
require('./config/env');

const app = express();
connectDB();

app.use(cors);

app.use(express.json());

module.exports = app