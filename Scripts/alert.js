$(document).ready(function (){

    let success=$('.alert-success');
    let info=$('.alert-info');
    let warning=$('.alert-warning');
    let danger=$('.alert-danger');


    function createClose(className,color){
        close= $('<a href="#" class="close">×</a>');
        close.css({'text-decoration':'none','color':color,'float':'right'})
        className.append(close);
        console.log(className.attr('class'))
        $('.close').click(function (e){
            e.preventDefault();
            var target = $(this.parentNode);
            target.hide('slow',function (){target.remove()})
        });
    }

    createClose(success,'#3c763d');
    createClose(info,'#31708f');
    createClose(warning,'#a94442');
    createClose(danger,'#8a6d3b');

})
