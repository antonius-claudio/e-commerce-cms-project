require('dotenv').config;
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const router = require('./routes');

console.log(process.env.PORT);
console.log(process.env.secret);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(router);