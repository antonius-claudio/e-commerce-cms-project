const router = require('express').Router();
const controllerProduct = require('../controllers/controllerProduct');
const authorization = require('../middlewares/authorization');

router.get('/', controllerProduct.getProduct);

router.use(authorization);

router.post('/', controllerProduct.createProduct);

router.put('/:id', controllerProduct.updateProduct);

router.delete('/:id', controllerProduct.deleteProduct);

module.exports = router