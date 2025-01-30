const express = require('express');
const dotenv = require("dotenv");
const formRoute = require('./routes/form');
const cors = require("cors");
dotenv.config({path:'./.env'});
const app = express();
app.use(express.json());
app.use(cors());
app.options('*',cors());
app.use(express.urlencoded({ extended: true }));

app.use('/form/submission',formRoute);

app.get('/',(req,res)=>{
    res.json({status:"success",message:"welcome"});
})


module.exports = app;

