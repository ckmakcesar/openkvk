const http = require('./http');

const get = (query, headers) => http.get(`/suggest/openkvk/${query}`, {headers});

module.exports = {
    get,
};
