const mongoose = require('mongoose');
const {FormModel} = require('../models/formModel');

exports.formHandler = async (req,res) => {
    try{
        const data = await FormModel.create(req.body);
        res.status(200).send('form submitted succesfully');
    }catch(err){
        res.status(400).json({status:'error'})
        console.log(err)
        console.log(req.body);
    }
}


