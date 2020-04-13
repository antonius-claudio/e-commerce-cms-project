const { Product } = require('../models');
class controllerProduct {
    static getProduct(req, res, next) {
        Product.findAll()
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log('error getProducts', err);
                next(err);
            });
    }

    static createProduct(req, res, next) {
        let form = {
            name: req.body.name,
            image_url: req.body.image_url,
            price: req.body.price,
            stock: req.body.stock
        };
        Product.create(form)
            .then((result) => {
                res.status(201).json(result);
            })
            .catch((err) => {
                next(err);
            });
    }

    static updateProduct(req, res, next) {
        let form = {
            name: req.body.name,
            image_url: req.body.image_url,
            price: req.body.price,
            stock: req.body.stock
        };
        let id = req.params.id;
        if (!id) {
            throw { msg: 'Product not found!' }
        }
        Product.findByPk(id)
            .then((result) => {
                if (result) {
                    return Product.update(form, {
                        where: {
                            id
                        }
                    })
                } else {
                    throw { msg: 'Product not found!' }
                }
            })
            .then((result) => {
                return Product.findByPk(id)
            })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                next(err);
            });
    }

    static deleteProduct(req, res, next) {
        let id = req.params.id;
        if (!id) {
            throw { msg: 'Product not found!' };
        }
        Product.findByPk(id)
            .then((result) => {
                if (result) {
                    return Product.destroy({
                        where: {
                            id
                        }
                    })
                } else {
                    throw { msg: 'Product not found!' };
                }
            })
            .then((result) => {
                res.status(200).json({message: 'Success Delete'});
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = controllerProduct