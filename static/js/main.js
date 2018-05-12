$(function () {

    $(".menu-list").click(function(){
       $(this).addClass("active").siblings("li") .removeClass("active");
    });

});