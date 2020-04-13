const express = require('express');
const request = require('supertest');
const app = express();
// const app = require('../server')

beforeAll(() => {
  
});

// routes get products
app.get('/products', function(req, res, next) {
    // kalau tidak ada token
    if (!req.headers.access_token) {
        res.status(401).json({message: 'Invalid Token'})
    }
    // kalau inputan kosong atau null
    if (req.body.name === '' || req.body.name === null) {
        
    }
    
    res.status(200).json({id: 1, name: 'sendok', price: 20000, stock: 100})
})

// test
describe('Products routes', ()=> {
    describe('/products get', () => {
        it('Get products complete requirement', (done) => {
            request(app)
                .get('/products')
                .set('access_token', '#$@#$@#$')
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(200);
                    done();
                })
        })

        it('Get Products without access_token', (done) => {
            request(app)
                .get('/products')
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(401);
                    done();
                })
        })
    })
})