require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const router = require('./routes');

console.log(process.env.PORT);
console.log(process.env.secret);
console.log(process.env.rounds);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router);

if (process.env.NODE_ENV !== 'test') {
    // app listen disini, tidak jalan kalau sedang test
    app.listen(port, () => {
        console.log('listening on port: ', port);
    })
}

module.exports = app