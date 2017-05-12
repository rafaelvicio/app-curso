module.exports = function(app){
  var controller = {
    index: function(req, res){
      res.json({'message': 'ola'});
    }
  };

  return controller;
};
