$(document).ready(function(){

    $('.navbar-header').after($("<span class='burger'><div class='slice'></div><div class='slice'></div><div class='slice'></div></span>"));


    $(document).on('click','.dropdown',function(){
        $('.dropdown').not(this).next().removeClass('show');
        $(this).next().toggleClass('show');
    });

    $(document).on('click','.burger',function(){
        $('.navbar-nav').not(this).next().removeClass('showMenu');
        $(this).next().toggleClass('showMenu');
    });


    $(document).on('click',function(e){
        if(!$(e.target).closest('.dropdown').length){
            $('.dropdown').next().removeClass('show');
        }
        if(!$(e.target).closest('.navbar-nav').length){
            $('.navbar-nav').next().removeClass('showMenu');
        }


    });

});