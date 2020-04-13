const app = require('express')();
const request = require('supertest');

beforeAll(() => {
  
});

// routes get products
app.get('/products', function(req, res, next) {
    if (req.headers.access_token) {
        res.status(200).json({id: 1, name: 'sendok', price: 20000, stock: 100})
    } else {
        res.status(401).json({message: 'Invalid Token'})
    }
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