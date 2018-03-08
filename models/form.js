var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema({
    correo: String,
    pregunta: String,
    fecha: Date
  });

  module.exports = mongoose.model('Form', FormSchema);