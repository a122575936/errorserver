var express = require('express');
var app = express();
var errors = {}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/error', function(req, res) {
    res.send('Got a POST request');
    errors[req.params.id] = req.params.content
});

app.get('/error', function(req, res) {
    res.json(errors);
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
