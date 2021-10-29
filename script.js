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
    $(".home .side-links a").on("click", function(){
        const $sideLinks = $(this).parent();
        if($sideLinks.hasClass("pull-left")){
            // open about page
            $sideLinks.parent().addClass("animate__animated animate__slideOutRight");
            $sideLinks.parent().parent().children(".about").css("display", "flex");
            $sideLinks.parent().parent().children(".about").addClass("animate__animated animate__slideInLeft");
            console.log("pull-left");
        } else if($sideLinks.hasClass("pull-right")){
            // open projects page
            $sideLinks.parent().addClass("animate__animated animate__slideOutLeft");
            $sideLinks.parent().parent().children(".projects").css("display", "flex");
            $sideLinks.parent().parent().children(".projects").addClass("animate__animated animate__slideInRight");
            console.log("pull-right");
        }
        console.log("clicked");
    });

    // back button animation
    $(".side-links.back a").on("click", function(){
        const $sideLinks = $(this).parent();
        if($sideLinks.hasClass("pull-left")){
            $sideLinks.parent().addClass("animate__animated animate__slideOutRight");
            $sideLinks.parent().parent().children(".home").css("display", "flex");
            $sideLinks.parent().parent().children(".home").addClass("animate__animated animate__slideInLeft");
            console.log("pull-left");
        } else if($sideLinks.hasClass("pull-right")){
            $sideLinks.parent().addClass("animate__animated animate__slideOutLeft");
            $sideLinks.parent().parent().children(".home").css("display", "flex");
            $sideLinks.parent().parent().children(".home").addClass("animate__animated animate__slideInRight");
            console.log("pull-right");
        }
        console.log("clicked");
    });


    // animation end
    function removeAnimations(){
        console.log("animation end");
        if($(this).hasClass("animate__slideOutLeft")){
            $(this).removeClass("animate__animated animate__slideOutLeft");
            $(this).css("display", "none");
            console.log("yup to out left");
        } else if($(this).hasClass("animate__slideOutRight")){
            $(this).removeClass("animate__animated animate__slideOutRight");
            $(this).css("display", "none");
            console.log("yes to out right");
        } else if($(this).hasClass("animate__slideInLeft")){
            $(this).removeClass("animate__animated animate__slideInLeft");
            console.log("yes to in left");
        } else if($(this).hasClass("animate__slideInRight")){
            $(this).removeClass("animate__animated animate__slideInRight");
            console.log("yes to in right");
        } else {
            console.log("nope");
        }
    }
    $("#home-page").on("animationend", removeAnimations);
    $("#about-page").on("animationend", removeAnimations);
    $("#projects-page").on("animationend", removeAnimations);
    $(".side-links").on("animationend", removeAnimations);

});