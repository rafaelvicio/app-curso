var mongoose = require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    nome: {
      type: String,
      rquired: true,
      index: {
        unique: true
      }
    },
    categoria: {
      type: String,
      require: true
    }
  });

  return mongoose.model('Curso', schema, 'cursos');
};
