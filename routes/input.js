var express = require('express');
var router = express.Router();

var input = {};

var answer = 0;

router.post('/', function(req, res) {
    //console.log('in input req.body', req.body);
    input = req.body;
    //console.log('input', input);
    math(input);

    res.sendStatus(200);
});


router.get('/', function(req, res) {
    res.send(answer.toString());
})


function math() {
    switch (input.buttonType) {
        case 'add':
            answer = parseFloat(input.firstNumber) + parseFloat(input.secondNumber);
            break;
        case 'subtract':
            answer = parseFloat(input.firstNumber) - parseFloat(input.secondNumber);
            break;
        case 'multiply':
            answer = parseFloat(input.firstNumber) * parseFloat(input.secondNumber);
            break;
        case 'divide':
            answer = parseFloat(input.firstNumber) / parseFloat(input.secondNumber);
            break;
        default:
    }

};
//  Export the router to app.js
module.exports = router;
