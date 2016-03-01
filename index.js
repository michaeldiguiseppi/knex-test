var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./routes');

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});
