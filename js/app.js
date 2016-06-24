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
var sectionWidht = $("#whildaker").width();
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
        'transition-duration': '10s'
    });
    $(".lineH2").css({
        width: '100%',
        'transition': '1s ease 0.82s'
    });
    $(".lineV").css({
        height: '85%',
        bottom: "2rem",
        transition: '1s'
    });

    //remover o top pq quebra no chrome
    function removeTop() {
        $(".lineV").css({top: 'auto'});
        console.log('tamanho do top ' + $(".lineV").css("top"));
        console.log('tamanho do bottom ' + $(".lineV").css("bottom"));
    }
    setTimeout(removeTop, 900);

    $(".lineV2").css({
        height: '85%',
        transition: '1s ease 1.72s'
    });

    // Letras aparecendo uma a uma
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

    console.log(sectionWidht);
    if (sectionWidht > "767"){
        $(".nodropdown").delay(2500).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'slow');
    }
};


//quando o usuário rolar para a sessão de baixo, identificar a posição

//escritório
var posicaoInicial = $('#escritorio').position().top;
$(document).scroll(function () { // oscultador de scroll
    var posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento

    //adicionar o box shadow à imagem
    if (posicaoInicial < posicaoScroll) $('#escritorio img').css({
    '-webkit-box-shadow': '0px 0px 8px 4px rgba(0,0,0,0.58)',
    '-moz-box-shadow': '0px 0px 8px 4px rgba(0,0,0,0.58)',
    'box-shadow': '0px 0px 8px 4px rgba(0,0,0,0.58)',
    transition: 'box-shadow 1s'
    });

    //Ativar o evento de desenho das linhas e aparecimento do texto

    if (posicaoInicial < posicaoScroll){
        if (sectionWidht > "767"){
            $(".lineHEsc").css({
                transition: '1s',
                width: '100px'
            });
            $(".lineHEsc2").css({
                transition: '1s',
                width: '40px'
            });
            $(".fundobranco h1, .fundobranco p").animate({opacity: 1}, 'slow');
        }

    }
});
