var mongoose = require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    name: {
      type: String,
      rquired: true,
      index: {
        unique: true
      }
    },
    password: {
      type: String,
      require: true
    }
  });

  return mongoose.model('Usuario', schema, 'usuarios');
};
