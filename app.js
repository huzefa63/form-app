const express = require('express');
const dotenv = require("dotenv");
const formRoute = require('./routes/form');
const cors = require("cors");
dotenv.config({path:'./.env'});
const app = express();
const corsOptions = {
  origin: 'https://huzefa63.github.io/project-form/', // Replace with your website URL
  methods: 'POST', // Allow only POST requests (for form submissions)
};
app.use(express.json());
app.use(cors(corsOptions));
app.options('*',cors());
app.use(express.urlencoded({ extended: true }));

app.use('/form/submission',formRoute);

app.get('/',(req,res)=>{
    res.json({status:"success",message:"welcome"});
})


module.exports = app;

