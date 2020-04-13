const router = require('express').Router();

router.get('/', controllerProduct.getProducts);

module.exports = router