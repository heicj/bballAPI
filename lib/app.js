const express = require('express');
const app = express();
const morgan = require('morgan');
require('./models/register-plugins');

app.use(express.json());
app.use(morgan('dev'));

module.exports = app;