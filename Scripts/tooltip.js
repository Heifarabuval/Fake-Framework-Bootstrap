$(document).ready(function(){
   let tooltip= $('.tooltip');


   tooltip.hover(function (){
       let tooltip= $(this);
       if (typeof tooltip.attr('title') !=='undefined' && !tooltip.children().hasClass('tooltiptext')){
           let title=tooltip.attr('title');
           let bgColor=tooltip.attr('data-bgcolor');
           tooltip.append('<span style="background-color:'+bgColor+' " class="tooltiptext">'+title+'</span>');
       }else {

       }
       let placement = $(this).attr('data-placement');
       let tooltipText=tooltip.children();
       switch (placement){
           case 'top':tooltipText.css({'inset':'-100% 0% 112% 5%'})
               break;
           case 'bottom':tooltipText.css({'inset':'113% 0% -106% 12%'})
               break;
           case 'right':tooltipText.css({'inset':'0% 0% 0% 103%'})
               break;
           case 'left':tooltipText.css({'inset':'1% 0% 0% -92%'})
               break;

       }

   })

});