// $("html").ready( function() {
//     window.alert( "Attention! This page is under development..." );
// });

$("#opt_home").click(function(){
    // $("#home").scroll();
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 100);
});

$("#opt_about").click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 100);
    // $("#about").scroll();
});
$("#opt_portifolio").click(function(){
    $('html, body').animate({
        scrollTop: $("#portifolio").offset().top
    }, 100);
});

$("#opt_contact").click(function(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 100);
});
function sidebar (){
    printConsole("click");
}

function printConsole(value){
    console.log(value);
}