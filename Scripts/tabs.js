$(document).ready(function(){
$('.tab-item').click(function (e){
    let target = '#'+$(this).attr('data-target');

    $('.tab-item').removeClass('active');
    $('.tab-pane').removeClass('active');
    $(this).addClass('active');
    $('#'+$(this).attr('data-target')).addClass('active');

})


});