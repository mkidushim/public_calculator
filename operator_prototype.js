function add_numbers() {
    var zero = $('#number_0').val();
    var one = $('#number_1').val();
    var result = (parseInt(zero) + parseInt(one));
    console.log('result:', result)
    $('#result_display').html(result);
    $('#operator').text('+');

}

function subtract() {

    var zero = $('#number_0').val();
    var one = $('#number_1').val();
    var result = (parseInt(zero) - parseInt(one));

    $('#result_display').html(result);
    $('#operator').text('-');
}

function multiply() {
    var zero = $('#number_0').val();
    var one = $('#number_1').val();
    var result = (parseInt(zero) * parseInt(one));
    $('#result_display').html(result);
    $('#operator').text('*')
}

function divide() {
    var zero = $('#number_0').val();
    var one = $('#number_1').val();
    var result = (parseInt(zero) / parseInt(one));
    $('#result_display').html(result);
    $('#operator').text('/')
}
