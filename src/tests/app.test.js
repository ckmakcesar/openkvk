const request = require('supertest');

const app = require('../app');
const { API_KEY } = require('../../secret');

describe('Basic test 001', () => {
    it('Should respond 200 on the open server', async () => {
        const testReq = await request(app).get('/');
        expect(testReq.statusCode).toBe(200);
    });

    it('Should respond 401 on getting SUGGEST with no API key', async () => {
        const unauthorizedReq = await request(app).get('/suggest/openkvk/goo');
        expect(unauthorizedReq.statusCode).toBe(401);
    });

    it('Should respond 401 on getting SUGGEST with wrong API key', async () => {
        const unauthorizedReq = await request(app)
            .get('/suggest/openkvk/goo')
            .set('Accept', 'application/json')
            .set({ 'ovio-api-key': 'good' });
        expect(unauthorizedReq.statusCode).toBe(401);
    });

    it('Should respond 200 on getting SUGGEST with wrong API key', async () => {
        const unauthorizedReq = await request(app)
            .get('/suggest/openkvk/goo')
            .set('Accept', 'application/json')
            .set({ 'ovio-api-key': API_KEY });
        expect(unauthorizedReq.statusCode).toBe(200);
    });
});
