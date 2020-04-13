const router = require('express').Router();
const controllerProduct = require('../controllers/controllerProduct');

router.get('/', controllerProduct.getProduct);

router.post('/', controllerProduct.createProduct);

module.exports = router