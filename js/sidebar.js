function ajusteTelaMobile(){
    var dysplay = document.getElementById('wrap');
    var sidebar = document.getElementById('sidebar');
    var text_opt = document.getElementsByClassName('text_options');
    var logo = document.getElementById('logo_sidebar')
    
    if(dysplay.offsetWidth < 500){
        sidebar.style.width = "18vw";
        logo.innerText = "LS";
        for (let i = 0; i < text_opt.length; i++) {
            text_opt[i].style.display = "none";               
        }
    };
};
function ajusteTelaDesktop(){
    var sidebar = document.getElementById('sidebar');
    var text_opt = document.getElementsByClassName('text_options');
    var logo = document.getElementById('logo_sidebar')
    sidebar.style.width = "15vw"
    logo.innerText = "Lucas Silva";
    for (let i = 0; i < text_opt.length; i++) {
        text_opt[i].style.display = "initial";              
    }
}
$('html').ready(function(){
    ajusteTelaMobile();
});
$('#wrap').change(function(){
    var dysplay = document.getElementById('wrap');
    printConsole(dysplay.offsetWidth);
    if(dysplay.offsetWidth > 1000){
        ajusteTelaDesktop();
    }else if(dysplay.offsetWidth < 500){
        ajusteTelaMobile();
    }
});
$("#opt_home").click(function(){
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 100);
});

$("#opt_about").click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 100);
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

$("#logo_sidebar").click(function(){
    sidebar();
});

function sidebar (){
    var sidebar = document.getElementById('sidebar');
    var dysplay = document.getElementById('wrap');
    var text_opt = document.getElementsByClassName('text_options');
    var logo = document.getElementById('logo_sidebar')
    if (dysplay.offsetWidth > 1000) {
        if(sidebar.offsetWidth > 140){
            sidebar.style.width = "4vw"
            logo.innerText = "LS";
            for (let i = 0; i < text_opt.length; i++) {
                text_opt[i].style.display = "none";
                
            }
        }else{
            sidebar.style.width = "15vw"
            logo.innerText = "Lucas Silva";
            for (let i = 0; i < text_opt.length; i++) {
                text_opt[i].style.display = "initial";              
            }
        }
    } else {
        if(sidebar.offsetWidth > 70){
            sidebar.style.width = "18vw"
            logo.innerText = "LS";
            for (let i = 0; i < text_opt.length; i++) {
                text_opt[i].style.display = "none";               
            }
        }else{
            sidebar.style.width = "50vw"
            logo.innerText = "Lucas Silva";
            for (let i = 0; i < text_opt.length; i++) {
                text_opt[i].style.display = "initial";              
            }
        }
    }

}

function printConsole(value){
    console.log(value);
}

// Links uteis 
// https://api.jquery.com/scrollTop/#scrollTop