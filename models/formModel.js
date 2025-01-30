const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  lastName: {
    type: String,
    required: [true, "last name is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  message: {
    type: String,
    required: [true, "message is required"],
  },
});

const FormModel = mongoose.model('Form',formSchema);

module.exports = {
  FormModel,
};