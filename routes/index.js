const router = require('express').Router();
const controllerUser = require('../controllers/controllerUser');
const routerProduct = require('./routerProduct');
const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authentication');

router.post('/login', controllerUser.login);

router.post('/register', controllerUser.register);

router.use('/products', authentication, routerProduct);

router.use(errorHandler);

module.exports = router