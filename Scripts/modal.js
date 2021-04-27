$(document).ready(function(){
    let open= false;

    function close(target){
        target.hide('fast');
        $('.popin-dismiss').remove();
        open=false;
    }
    $('button').on('click',function (e){
        e.preventDefault();
        let target = $('#'+$(this).attr('data-target'));

        if (open===false){
            target.find('.modal-content').prepend('<button class="popin-dismiss">x</button>');
            open=true;
            target.show('slow');
        }else {
            close(target);
        }

        $('.popin-dismiss').on('click',function (e){
            close(target);
        })
         $(document).keyup(function(e) {
             if (e.key === "Escape") {
                 close(target)
             }


         });
    })


});