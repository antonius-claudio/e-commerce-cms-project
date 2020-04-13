const { Product } = require('../models');
class controllerProduct {
    static getProduct (req, res, next) {
        Product.findAll()
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log('error getProducts', err);
                next(err);
            });
    }

    static createProduct (req, res, next) {
        
    }
}

module.exports = controllerProduct