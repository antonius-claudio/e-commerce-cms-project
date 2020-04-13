const request = require('supertest');

// kalau mau test pakai file test saja ini di uncomment------------
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// ----------------------------------------------------------------

// kalau mau test pakai controller ini di uncomment
const app = require('../server');
// ------------------------------------------------

// contoh token
const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIlVzZXJFbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNTg2NzY5MzU2fQ.1ssiiZlj6I2mhhZMFbt5soXRa4EP4k3h-IsVPOtp9OM';

// routes get products
// app.get('/products', function(req, res, next) {
//     // Get products with access_token
//     if (req.headers.access_token) {
//         res.status(200).json({id: 1, name: 'sendok', price: 20000, stock: 100})
//     } else {
//         // Get Products without access_token
//         res.status(401).json({message: 'Invalid Token'})
//     }
// })

// app.post('/products', function(req, res, next) {
//     let { name, image_url, price, stock } = req.body;
//     // console.log({ name, image_url, price, stock })
//     if (!req.headers.access_token) {
//         // Post Products without access_token
//         res.status(401).json({message: 'Invalid Token'})
//     } else {
//         if (!name || !image_url || !price || !stock || price < 0 || stock  < 0) 
//         {
//             // Post Products with access_token and empty input
//             console.log({ name, image_url, price, stock })
//             res.status(400).json({message: 'Bad Request'})
//         } else {
//             // Post Products with access_token and complete input
//             res.status(201).json({id: 1, name: 'sendok', price: 20000, stock: 100})
//         }
//     }
// })

// app.put('/products/:id', function(req, res, next) {
//     let { name, image_url, price, stock } = req.body;
//     let id = req.params.id;
//     console.log('id', id);
//     if (!req.headers.access_token) {
//         res.status(401).json({message: 'Invalid Token'})
//     } else {
//         if (!name || ! image_url || !price || !stock || price < 0 || stock < 0 || !id) {
//             res.status(400).json({message: 'Bad Request'})
//         } else {
//             res.status(200).json({message: 'Success Update'})
//         }
//     }
// })

// test
describe('Users routes', () => {
    describe('/Users post', () => {
        it('Login Users complete input', function(done) {
            request(app)
                .post('/login')
                .send({email:'user1@mail.com', password:'1234'})
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(200);
                    done();
                })
        })

        it('Login Users empty input', function(done) {
            request(app)
                .post('/login')
                .send({email:'', password:''})
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(400);
                    done();
                })
        })

        it('Login Users invalid email', function(done) {
            request(app)
                .post('/login')
                .send({email:'user2@mail.com', password:'1234'})
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(404);
                    done();
                })
        })

        it('Login Users invalid password', function(done) {
            request(app)
                .post('/login')
                .send({email:'user1@mail.com', password:'12345'})
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(401);
                    done();
                })
        })

    })
})

describe('Products routes', () => {
    describe('/products get', () => {
        it('Get products with access_token', function(done) {
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

    describe('/products post', () => {
        it('Create products with access_token', function(done) {
            request(app)
                .post('/products')
                .set('access_token', access_token)
                .send({name:'garpu', image_url:'gambar', price:10000, stock:100})
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(201);
                    done();
                })
        })

        it('Create products with access_token and empty input', function(done) {
            request(app)
                .post('/products')
                .send({name:'', image_url:null, price:undefined, stock:0})
                .set('access_token', access_token)
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(400);
                    done();
                })
        })

        it('Create products without access_token', function(done) {
            request(app)
                .post('/products')
                .send({name:'garpu', image_url:'gambar', price:10000, stock:100})
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(401);
                    done();
                })
        })

    })

    describe('/products put', () => {
        let idUpdate = 3;
        let idUpdateMax = 30;

        it('Update products with access_token & complete input', function(done) {
            request(app)
                .put('/products/' + idUpdate)
                .send({name:'garpu2', image_url:'gambar2', price:20000, stock:200})
                .set('access_token', access_token)
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(200);
                    done();
                })
        })

        it('Update products with access_token & invalid input', function(done) {
            request(app)
                .put('/products/' + idUpdate)
                .send({name:'', image_url:null, price:undefined, stock:0})
                .set('access_token', access_token)
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(400);
                    done();
                })
        })

        it('Update products without access_token & complete input', function(done) {
            request(app)
                .put('/products/' + idUpdate)
                .send({name:'garpu2', image_url:'gambar2', price:20000, stock:200})
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(401);
                    done();
                })
        })

        it('Update products with access_token, complete input & Invalid Id', function(done) {
            request(app)
                .put('/products/' + idUpdateMax)
                .send({name:'garpu2', image_url:'gambar2', price:20000, stock:200})
                .set('access_token', access_token)
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(404);
                    done();
                })
        })
    })

    describe('/products delete', () => {
        let idDelete = 16;
        let idDeleteMax = 30; //biar notfound

        it('Delete products without access_token & Valid Id', function(done) {
            request(app)
                .delete('/products/' + idDelete)
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(401);
                    done();
                })
        })

        it('Delete products with access_token & Invalid Id', function(done) {
            request(app)
                .delete('/products/' + idDeleteMax)
                .set('access_token', access_token)
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(404);
                    done();
                })
        })

        it('Delete products with access_token and Valid Id', function(done) {
            request(app)
                .delete('/products/' + idDelete)
                .set('access_token', access_token)
                .then(response => {
                    let { status, body } = response;
                    expect(status).toBe(200);
                    done();
                })
        })
    })
})