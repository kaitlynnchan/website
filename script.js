$(document).ready(function(){
    console.log("ready");

    // icons animation
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("hover");
    });

    // side links hover animations
    // $(".side-links.pull-right").on("animationend", function(){
    //     console.log("animation end");
    //     $(this).removeClass("animate__animated animate__slideInRight");
    // });
    // $(".side-links.pull-left").on("animationend", function(){
    //     console.log("animation end");
    //     $(this).removeClass("animate__animated animate__slideInLeft");
    // });

    // side links click animation
    $(".side-links a").on("click", function(){
        if($(this).parent().hasClass("pull-left")){
            $(this).parent().parent().addClass("animate__animated animate__slideOutRight");
            console.log("pull-left");
        } else if($(this).parent().hasClass("pull-right")){
            $(this).parent().parent().addClass("animate__animated animate__slideOutLeft");
            console.log("pull-right");
        }
        console.log("clicked");
    });
    
    $("#home-page").on("animationend", function(){
        console.log("animation end");
        if($(this).hasClass("animate__slideOutLeft")){
            $(this).parent().children(".animate__slideOutLeft").removeClass("animate__animated animate__slideOutLeft");
            $(this).css("visibility", "hidden");
            console.log("yup to out left");
        } else if($(this).hasClass("animate__slideOutRight")){
            $(this).parent().children(".animate__slideOutRight").removeClass("animate__animated animate__slideOutRight");
            $(this).css("visibility", "hidden");
            console.log("yes to out right");
        } else {
            console.log("nope");
        }
    });
});