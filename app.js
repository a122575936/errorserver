var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var errors = {};

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/error', function(req, res) {
    //console.log('print params ', req.params)
    //console.log('print body ', req.body)
    //console.log('print query ', req.query)
    errors[req.body.id] = req.body.content
    res.send('Got a POST request');
});

app.get('/error', function(req, res) {
    //console.log('print params ', req.params)
    //console.log('print body ', req.body)
    //console.log('print query ', req.query)
    res.json(errors);
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
