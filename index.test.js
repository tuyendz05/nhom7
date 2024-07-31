const request = require('supertest');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD with GitHub Actions!');
});

describe('GET /', () => {
    it('should return Hello, CI/CD with GitHub Actions!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, CI/CD with GitHub Actions!');
    });
});
