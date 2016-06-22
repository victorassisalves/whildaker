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
 var divHeight = $('#linhaHome').css("height");
// quando a página carregar começar o evento de desenhar as linhas na primeira section.
function drawLine(){
    $(".lineH").css({
        width: '+=50%',
        "text-align": 'left',
        transition: '3s'
    });
    $(".lineV").animate({
        heigth: "divHeight",
        transition: '3s'
    });
    //quando as linha atingirem o ponto final, mostrar o menu.
};

//quando o usuário rolar para a sessão de baixo, identificar a posição
    //Ativar o evento de desenho das linhas e aparecimento do texto