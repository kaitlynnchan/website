$(document).ready(function(){
    console.log("ready");

    // icons animation
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("Icon hover");
    });


    // side links click animation
    $("#home-page .side-links a").on("click", function(){
        $("body").css("overflow", "hidden");
        const $sideLinks = $(this).parent();
        if($sideLinks.hasClass("pull-left")){
            // open about page
            $sideLinks.parent().addClass("animate__animated animate__slideOutRight");
            $("#about-page").css("display", "flex");
            $("#about-page").addClass("animate__animated animate__slideInLeft");
        } else if($sideLinks.hasClass("pull-right")){
            // open projects page
            $sideLinks.parent().addClass("animate__animated animate__slideOutLeft");
            $("#projects-page").css("display", "flex");
            $("#projects-page").addClass("animate__animated animate__slideInRight");
        }
        console.log("Clicked side link");
    });

    // back button animation
    $(".side-links.back a").on("click", function(){
        $("body").css("overflow", "hidden");
        const $sideLinks = $(this).parent();
        if($sideLinks.hasClass("pull-left")){
            // moving right
            $sideLinks.parent().addClass("animate__animated animate__slideOutRight");
            $("#home-page").css("display", "flex");
            $("#home-page").addClass("animate__animated animate__slideInLeft");
        } else if($sideLinks.hasClass("pull-right")){
            // moving left
            $sideLinks.parent().addClass("animate__animated animate__slideOutLeft");
            $("#home-page").css("display", "flex");
            $("#home-page").addClass("animate__animated animate__slideInRight");
        }
        console.log("Clicked back button");
    });


    // animation end
    function removeAnimations(){
        console.log("Animation end on '" + $(this).attr("class") + "'");
        if($(this).hasClass("animate__slideOutLeft")){
            $(this).removeClass("animate__animated animate__slideOutLeft");
            $(this).css("display", "none");
            $("body").css("overflow", "");
        } 
        else if($(this).hasClass("animate__slideOutRight")){
            $(this).removeClass("animate__animated animate__slideOutRight");
            $(this).css("display", "none");
            $("body").css("overflow", "");
        } 
        else if($(this).hasClass("animate__slideInLeft")){
            $(this).removeClass("animate__animated animate__slideInLeft");
        } 
        else if($(this).hasClass("animate__slideInRight")){
            $(this).removeClass("animate__animated animate__slideInRight");
        } 
        else {
            console.log("No animations removed");
        }
    }
    $("#home-page").on("animationend", removeAnimations);
    $("#about-page").on("animationend", removeAnimations);
    $("#projects-page").on("animationend", removeAnimations);
    $(".side-links").on("animationend", removeAnimations);

});