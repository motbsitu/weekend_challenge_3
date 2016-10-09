var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//  Router
var inputRouter = require('./routes/input');

var app = express();

//  Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//  Using the routers
app.use('/input', inputRouter);


//  Connecting to index.html
app.get('/', function(req, res){
  console.log('received a request at', new Date());
  var filename = path.join(__dirname, 'public/views/index.html');
  res.sendFile(filename);
});

//  Sets the project to localhost:3000
app.listen(3000);
