var cursos = [
  {nome: 'Curso 1', categoria: 'Categoria 1'},
  {nome: 'Curso 2', categoria: 'Categoria 2'},
  {nome: 'Curso 3', categoria: 'Categoria 3'}
];

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
