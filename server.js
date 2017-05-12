var app = require('./config/express')();
require('./config/database')('mongodb://localhost:27017/cursos');

app.listen(app.get('port'), function(){
  console.log(`Express Server on port ${app.get('port')}`);
});
