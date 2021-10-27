$(document).ready(function(){
    console.log("ready");

    // day selected
    $(".icons a").each(function(){
        $(this).hover(function(){
            $(this).children(".fa-circle").toggleClass("selected");
            $(this).children(".icon").toggleClass("selected");
            console.log("hover");
        });
    });

});