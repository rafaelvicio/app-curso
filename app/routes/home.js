module.exports = function(app){
  var controller = app.controllers.home;

  app.get('/api/', controller.index);
  app.post('/', controller.new);

};
