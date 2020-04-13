const { User } = require('../models');
const { compare } = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwt');
class controllerUser {

    static register(req, res, next) {
        let form = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({
            where: {
                email: form.email
            }
        })
        .then((result) => {
            if (result) {
                throw {status:401, msg: 'Email already used!'};
            } else {
                return User.create(form);
            }
        })
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            next(err);
        });
    }

    static login(req, res, next) {
        let form = {
            email: req.body.email,
            password: req.body.password
        }
        let errors = [];
        if (form.email === undefined || form.email === '' || form.email === null) {
            errors.push({message: 'Email is required!'});
        }
        if (form.password === undefined || form.password === '' || form.password === null) {
            errors.push({message: 'password is required!'});
        }
        if (errors.length === 0) {
            User.findOne({
                where: {
                    email: form.email
                }
            })
                .then((result) => {
                    if (result) {
                        if (compare(form.password, result.password)) {
                            let access_token = sign({
                                UserId: result.id,
                                UserEmail: result.email
                            })
                            res.status(200).json({access_token, id:result.id, email:result.email});
                        } else {
                            throw {status:401, msg: 'Password invalid!'};
                        }
                    } else {
                        throw {msg: 'Email not found!'};
                    }
                })
                .catch((err) => {
                    console.log('error', err)
                    next(err);
                });
        } else {
            throw {errors};
        }
    }
}

module.exports = controllerUser;