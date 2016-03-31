var express = require('express');
var app = express();

app.use(express.static('src'));
app.use('/node_modules', express.static('node_modules'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});