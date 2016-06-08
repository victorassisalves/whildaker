$(".dropdown-list").click(function(){
    $(".dropdown").slideToggle("slow");
});
$("header").mouseleave(function(){
    $(".dropdown").slideUp("slow");
});