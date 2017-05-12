module.exports = function(app){
  var controller = {
    index: function(req, res){
      res.render('index', cursos);
    },
    new: function(req, res){
      cursos.push(req.body);
      res.json(cursos);
    }
  };

  return controller;
};
