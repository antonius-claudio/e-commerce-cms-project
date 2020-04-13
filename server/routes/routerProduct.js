const router = require('express').Router();
const controllerProduct = require('../controllers/controllerProduct');

router.get('/', controllerProduct.getProduct);

router.post('/', controllerProduct.createProduct);

router.put('/:id', controllerProduct.updateProduct);

router.delete('/:id', controllerProduct.deleteProduct);

module.exports = router