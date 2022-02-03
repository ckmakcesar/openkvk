const express = require('express');
const testController = express();

testController.get('/', (req, res) => {
    res.status(200).json({ result: 'OK2' });
})

module.exports = testController;