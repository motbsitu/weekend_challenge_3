var express = require('express');
var router = express.Router();

var input = {};

var answer = 0;

router.post('/', function(req, res) {
    console.log('in input req.body', req.body);
    input = req.body;
    console.log('input', input);
    math(input);

    res.sendStatus(200);
});


router.get('/', function(req, res) {
    res.send(answer.toString());
})


function math() {
    switch (input.buttonType) {
        case 'add':
            answer = parseInt(input.firstNumber) + parseInt(input.secondNumber);
            break;
        case 'subtract':
            answer = parseInt(input.firstNumber) - parseInt(input.secondNumber);
            break;
        case 'multiply':
            answer = parseInt(input.firstNumber) * parseInt(input.secondNumber);
            break;
        case 'divide':
            answer = parseInt(input.firstNumber) / parseInt(input.secondNumber);
            break;
        default:
    }

};
//  Export the router to app.js
module.exports = router;
