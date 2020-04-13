const bcrypt = require('bcryptjs');

function hash (password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(process.env.rounds));
}

function compare (password, hashedPass) {
    return bcrypt.compareSync(password, hashedPass);
}

module.exports = { hash, compare }