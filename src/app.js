const express = require('express');

const testController = require('./controllers/testController.js');
const suggestController = require('./controllers/suggestController.js');

const app = express();

app.use('/', testController)
app.use('/suggest', suggestController)

module.exports = app;
