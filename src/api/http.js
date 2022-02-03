const axios = require('axios');

const http = axios.create({
  baseURL: 'https://api.overheid.io',
  headers: { 'Content-type': 'application/json' },
});

const responseHandler = (res) => res.data;

const errorHandler = (err) => (err);

http.interceptors.response.use(
  (res) => responseHandler(res),
  (err) => errorHandler(err)
);

module.exports = http;
