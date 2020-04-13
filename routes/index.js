const router = require('express').Router();
const controllerUser = require('../controllers/controllerUser');
const routerProduct = require('./routerProduct');

router.post('/login', controllerUser.login);

router.use('/products', routerProduct);

module.exports = router