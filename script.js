$(document).ready(function(){
    console.log("ready");

    // day selected
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("hover");
    });

});