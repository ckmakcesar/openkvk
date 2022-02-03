const axios = require('axios');
const remoteServer = require('../api/remoteServer');

const getSuggestOpenkvk = (query, headers) => remoteServer.get(query, headers);

module.exports = {
    getSuggestOpenkvk,
};
