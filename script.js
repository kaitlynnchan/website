$(document).ready(function(){
    console.log("ready");

    // day selected
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("hover");
    });

    $(".side-links a").hover(
        function(){
            $(this).parent().children(".overlay").css("visibility", "visible");
            console.log("side links visible");
        },
        function(){
            $(this).parent().children(".overlay").css("visibility", "hidden");
            console.log("side links hidden");
        }
    );

});