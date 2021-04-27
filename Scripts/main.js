window.onload = function (){

   let framework=document.createElement('link');
   framework.href='Sass/my-framework.css';
   framework.rel='stylesheet';
   let alerts=document.createElement('script');
   alerts.src='Scripts/alert.js';
   let nav=document.createElement('script');
   nav.src='Scripts/dropdown.js';
   let modal=document.createElement('script');
   modal.src='Scripts/modal.js';
   let tooltip=document.createElement('script');
   tooltip.src='Scripts/tooltip.js';
   let tabs=document.createElement('script');
   tabs.src='Scripts/tabs.js';

    document.getElementsByTagName('head')[0].append(framework,alerts,nav,modal,tooltip,tabs);

}


/*
$(document).ready(function (){
    $('head').append('<link rel="stylesheet" href="my-framework.css" rel="stylesheet">'+'<script rel="script" src="Scripts/alert.js"></script>'+' <script rel="script" src="Scripts/dropdown.js"></script>')
});*/
