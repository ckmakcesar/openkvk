const express = require('express');
const suggestController = express();

const proxyService = require('../services/proxyService');
const { API_KEY } = require('../../secret');

suggestController.get(`/openkvk/:query`, async (req, res) => {
    const apiKey = req.header('ovio-api-key');
    if (apiKey !== API_KEY) {
        res.status(401).json({
            "error": "Geen geldige API key of je email adres is niet gevalideerd. Meer informatie is te vinden op https://overheid.io/documentatie"
        })
        return;
    }
    const queryToValidate = req.params.query;
    const regexp = /[a-zA-z0-9 ]{3,63}/;
    if (!regexp.test(queryToValidate)) {
        res.status(400).json({
            "error": "Malformed request query param"
        })
        return;
    }

    const data = await proxyService.getSuggestOpenkvk(queryToValidate, { 'ovio-api-key': apiKey})

    res.status(200).json({ data });
})

module.exports = suggestController;