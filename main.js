$(document).ready(function(){
    alert('aPagina reset')
})

$('form').on('submit',function(e) {
    e.preventDefault();
})


$('header button').on('click',function(){
    $('form').slideDown();
})

$('#cancelar').on('click', function(){
    $('form').slideUp();
})