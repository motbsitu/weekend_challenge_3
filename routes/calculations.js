var express = require('express');
var router = express.Router();

var calculations = {
  add: 0,
  subtract: 0,
  multiply: 0,
  divide: 0
};



//It should calculate addition, subtraction, multiplication, and division

router.get('/', function(req,res){
  console.log('get inside calculations,' calculations);
  res.send(calculations);
})


router.post('/', function(req,res){
  //switch statment maybe assigning operation based on button clicked
  //switch(calculations){
    //case 0: mathOperation.add = x + y;
    //break;
    console.log('something in post calculations');
  res.sendStatus(200);
});


//  Exports the router for use in app.js
module.exports = router;
