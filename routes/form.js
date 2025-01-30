const express = require('express');
const {formHandler,formUserHandler} = require('../controllers/formHandler');
const route = express.Router();

route.route('/').post(formHandler);
route.route('/').get((req,res)=>res.send('hello there'));
module.exports = route;