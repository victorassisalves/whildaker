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
    $('#linhaHome').css({'height': vph + 'px'});
};

// quando a página carregar começar o evento de desenhar as linhas na primeira section.
function drawLine(){
    var divHeight = $('#linhaHome').css("height");
    console.log(divHeight);
    $(".lineH").css({
        width: '100%',
        'transition': '15s'
    });

    $(".lineV").animate({
        height: 'divHeight',
        transition: '3s'

    });
    //quando as linha atingirem o ponto final, mostrar o menu.
};

//quando o usuário rolar para a sessão de baixo, identificar a posição
    //Ativar o evento de desenho das linhas e aparecimento do texto