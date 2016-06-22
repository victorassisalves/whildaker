$(".dropdown-list").click(function(){
    $(".dropdown").slideToggle("slow");
});
$("header").mouseleave(function(){
    $(".dropdown").slideUp("slow");
});

$(document).ready(function(){
    resizeDiv();
});

window.onresize = function(event) {
    resizeDiv();
};

function resizeDiv() {
    vph = $(window).height();
    $('#whildaker').css({'height': vph + 'px'});
};

// quando a página carregar começar o evento de desenhar as linhas na primeira section.
function drawLine(){
    var path = document.querySelector('.squiggle-animated path');
    var length = path.getTotalLength();
// Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
        'none';
// Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
    path.getBoundingClientRect();
// Define our transition
    path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 2s ease-in-out';
// Go!
    path.style.strokeDashoffset = '0';
    //quando as linha atingirem o ponto final, mostrar o menu.
};

//quando o usuário rolar para a sessão de baixo, identificar a posição
    //Ativar o evento de desenho das linhas e aparecimento do texto