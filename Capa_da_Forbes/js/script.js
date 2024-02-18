// Seu código jQuery aqui
$(document).ready(function(){
    $("article").hover(function(){
        $(this).fadeTo("fast", 0.8);
    }, function(){
        $(this).fadeTo("fast", 1);
    });
});