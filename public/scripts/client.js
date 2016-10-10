$(function() {
  //  getNumber();  don't call here because will load previous data when loaded
    //submit event
    $('#buttons').on('click', 'input[type=button]', function(event) {
        event.preventDefault();
        var formData = {};
        formData.firstNumber = $('input[name=firstNumber]').val();
        formData.secondNumber = $('input[name=secondNumber]').val();
        formData.buttonType = $(this).attr('name');

        console.log(formData);
        $.ajax({
            type: 'POST',
            url: '/input',
            data: formData,
            success: function() {
                getNumber();
            }
        });
    });
});

$(function() {
    $('#clearButton').on('click', 'input[name=clear]', function(event) {
        event.preventDefault();
        $('input[name=firstNumber]').val('');
        $('input[name=secondNumber]').val('');
        $('#answer').empty();
    });
});


//get the numbers from input
function getNumber() {
    $.ajax({
        type: 'GET',
        url: '/input',
        success: function(answer) {
            $('#answer').empty();
            var $p = $('<p>' + answer + '</p>');
            $('#answer').append($p);

        }
    });
}
