// Get the things we need
var express = require('express');
var app = express();
var path = require('path');

// Set the puclic folder to serve public assets
app.use(express.static(__dirname + '/public'));

// Set up one route to the index.html file
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

// Start server on port 8080
app.listen(8080);
console.log('ANGULAR-APP RODANDO NA PORTA 8080');
