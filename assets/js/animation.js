$(document).ready(function(){
    console.log("ready");
    var isAnimationDone = false;

    // icons animation
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("Icon hover");
    });

    // top-btn animation
    $(".top-btn a").hover(function(){
        $(this).children("span").toggleClass("selected");
    });


    // side button click animation
    $("#home-page .side-btn a").on("click", function(){
        if(isAnimationDone){
            $("body").css("overflow", "hidden");
            const $sideBtn = $(this).parents("section");
            if($sideBtn.hasClass("pull-left")){
                // open about page
                $sideBtn.parents(".page").addClass("animate__animated animate__slideOutRight");
                $("#about-page").css("display", "flex");
                $("#about-page").addClass("animate__animated animate__slideInLeft");
            } else if($sideBtn.hasClass("pull-right")){
                // open projects page
                $sideBtn.parents(".page").addClass("animate__animated animate__slideOutLeft");
                $("#projects-page").css("display", "flex");
                $("#projects-page").addClass("animate__animated animate__slideInRight");
            }
            isAnimationDone = false;
        }
        console.log("Clicked side button");
    });

    // back button animation
    function clickBackBtn(){
        if(isAnimationDone){
            $("body").css("overflow", "hidden");
            const $btn = $(this).parents("section");
            if($btn.hasClass("pull-left")){
                // moving right
                $btn.parents(".page").addClass("animate__animated animate__slideOutRight");
                $("#home-page").css("display", "flex");
                $("#home-page").addClass("animate__animated animate__slideInLeft");
            } else if($btn.hasClass("pull-right")){
                // moving left
                $btn.parents(".page").addClass("animate__animated animate__slideOutLeft");
                $("#home-page").css("display", "flex");
                $("#home-page").addClass("animate__animated animate__slideInRight");
            }
            isAnimationDone = false;
        }
        console.log("Clicked back button");
    }
    $(".side-btn.back a").on("click", clickBackBtn);
    $(".top-btn.back a").on("click", clickBackBtn);

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
        isAnimationDone = true;
    }
    $("#home-page").on("animationend", removeAnimations);
    $("#about-page").on("animationend", removeAnimations);
    $("#projects-page").on("animationend", removeAnimations);
    $(".side-btn").on("animationend", removeAnimations);

    $(".nav-hamburger").on("click", function(){
        if($(".nav-btns").hasClass("dropped")){
            $(".nav-btns").removeClass("dropped");
            $(".nav-btns").addClass("collapsed");
        } else{
            $(".nav-btns").addClass("dropped");
        } 
        console.log("Clicked nav hamburger");
    });
});



// .open-menu ul li a:hover
// {
//   border-bottom: 5px solid #000;
//   transition: 0.2s all;
// }