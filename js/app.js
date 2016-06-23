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
    $('#contato').css({'height': vph + 'px'});
};

// quando a página carregar começar o evento de desenhar as linhas na primeira section.
function drawLine(){
    $(".lineH").css({
        width: '100%',
        'transition-duration': '7.7s'
    });
    $(".lineH2").css({
        width: '100%',
        'transition': '1s ease 0.72s'
    });
    $(".lineV").css({
        height: '85%',
        transition: '1s'
    });
    $(".lineV2").css({
        height: '85%',
        transition: '1s ease 1.72s'
    });

    var string = $('.textwhildaker p').html();
    $('.textwhildaker p').html("");
    var q = jQuery.map(string.split(''), function (letter) {

        return $('<span>'+letter+'</span>');
    });

    var destination = $('.textwhildaker');

    var c = 0;

    var i = setInterval(function () {

        q[c].appendTo(destination).hide().fadeIn(100);
        c += 1;

        if (c >= q.length) clearInterval(i);
    }, 20);
    //quando as linha atingirem o ponto final, mostrar o menu.

    $(".nodropdown").delay(2500).fadeIn();
};

//quando o usuário rolar para a sessão de baixo, identificar a posição
    //Ativar o evento de desenho das linhas e aparecimento do texto