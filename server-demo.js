var express = require('express');
var app = express();
var api = require('./demo/api');

app.use(express.static('demo'));
app.use('/node_modules', express.static('node_modules'));

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});