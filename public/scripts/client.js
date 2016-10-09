$(function(){
  getNumber();
//submit event
$('form').on('submit', function(event){
  event.preventDefault();
  var formData = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: '/input',
        data: formData,
        success: getNumber
    });

    $(this).find('input[type=text]').val(' '); //clear
  });
});



//get the numbers from input
function getNumber(){
  $.ajax({
    type: 'GET',
    url:'/input',
    success: function(input){
      $('#answer').empty();
      input.forEach(function(num){
        var $p = $('<p></p>');
        $p.append('<p>' + num.firstNumber + '</p>');
        $p.append('<p>' + num.secondNumber + '</p>');



        $p.append('<p>' + num.answer + '</p>')
        $('#answer').append($p);
      });
    }
  });
}

//HAVE NO IDEA ON the following

//get answer for DOM
function getCalculations(number){
  $.ajax({
    type: 'GET',
    url: '/calculations',
    success: function(answer){
      console.log('getCalculations works');
    // var answer =   answer[number];
    // $('.' + answer).text(answer);
    }
  });
}

//send input to calculations
function postLikes(number){
  $.ajax({
    type: 'POST',
    url: '/calculations/' + number,
    success: function(){
      getCalculations(number);
    }
  });
}
