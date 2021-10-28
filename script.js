$(document).ready(function(){
    console.log("ready");

    // day selected
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("hover");
    });

    // $(".side-links a").hover(
    //     function(){
    //         $(this).parent().children(".overlay").css("visibility", "visible");
    //         console.log("side links visible");
    //     },
    //     function(){
    //         $(this).parent().children(".overlay").css("visibility", "hidden");
    //         console.log("side links hidden");
    //     }
    // );

    $(".side-links.pull-right a").hover(
        function(){
            $(this).parent().addClass("animate__animated animate__slideInRight");
            console.log("side links visible");
        }
    );
    $(".side-links.pull-left a").hover(
        function(){
            $(this).parent().addClass("animate__animated animate__slideInLeft");
            console.log("side links visible");
        }
    );

    $(".side-links.pull-right").on("animationend", function(){
        console.log("animation end");
        $(this).removeClass("animate__animated animate__slideInRight");
    });
    $(".side-links.pull-left").on("animationend", function(){
        console.log("animation end");
        $(this).removeClass("animate__animated animate__slideInLeft");
    });
});