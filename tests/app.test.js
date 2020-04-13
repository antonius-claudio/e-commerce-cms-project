const express = require('express');
const request = require('supertest');
const app = express();
// const app = require('../server');


const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIlVzZXJFbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNTg2NzY5MzU2fQ.1ssiiZlj6I2mhhZMFbt5soXRa4EP4k3h-IsVPOtp9OM';

// routes get products
app.get('/products', function(req, res, next) {
    // Get products with access_token
    if (req.headers.access_token) {
        res.status(200).json({id: 1, name: 'sendok', price: 20000, stock: 100})
    } else {
        // Get Products without access_token
        res.status(401).json({message: 'Invalid Token'})
    }
})

app.post('/products', function(req, res, next) {

})

// test
describe('Products routes', ()=> {
    describe('/products get', () => {
        it('Get products with access_token', function (done) {
            request(app)
                .get('/products')
                .set('access_token', access_token)
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(200);
                    done();
                })
        })

        it('Get Products without access_token', function (done) {
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