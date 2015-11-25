var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/error', function(req, res) {
    res.send('Got a POST request');
});

app.get('/error/:num', function(req, res) {
    res.send('Got a GET request');
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
