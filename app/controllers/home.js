module.exports = function(app){

  var Cursos = app.models.curso;

  var controller = {
    index: function(req, res){
      Curso.find({}, [], {sort: {nome: 1}}).exec().then((cursos) => {
        res.render('index', cursos);
      });
    },
    new: function(req, res){
      var curso = new Curso(req.body);
      curso.save(function(err, curso){
        if(err){
          res.status(500).end();
          console.log(err);
        }else{
          res.json(curso);
        }
      });
    }
  };

  return controller;
};
