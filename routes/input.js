var express = require('express');
var router = express.Router();

var input = [];



router.post('/', function(req, res){
  console.log('in input req.body', req.body);

  input.push(req.body);

  console.log('input', input);
  res.sendStatus(200);
});




router.get('/', function(req,res){
  res.send(input);
})

//  Export the router to app.js
module.exports = router;

// var numbers = req.body;
// console.log(numbers[0]);
// var answer = function(numbers){
//   console.log('numbers in function', numbers);
//   numbers[0] + numbers[2];
//
// };
