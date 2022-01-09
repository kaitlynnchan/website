$(document).ready(function(){
    console.log("ready");
    var isAnimationDone = false;

    // icons animation
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("Icon hover");
    });

    // clicking page buttons
    function clickBtn(btn, pageName){
        if(isAnimationDone){
            $("body").css("overflow", "hidden");
            if(btn.hasClass("pull-left")){
                // moving right
                btn.parents(".page").addClass("animate__animated animate__slideOutRight");
                $(pageName).css("display", "flex");
                $(pageName).addClass("animate__animated animate__slideInLeft");
            } else if(btn.hasClass("pull-right")){
                // moving left
                btn.parents(".page").addClass("animate__animated animate__slideOutLeft");
                $(pageName).css("display", "flex");
                $(pageName).addClass("animate__animated animate__slideInRight");
            }
            isAnimationDone = false;
        }
    }

    // side button click animation
    $("#home-page .side-btn a").on("click", function(){
        const $sideBtn = $(this).parents("section");
        if($sideBtn.hasClass("pull-left")){
            // open about page
            clickBtn($sideBtn, "#about-page");
        } else if($sideBtn.hasClass("pull-right")){
            // open projects page
            clickBtn($sideBtn, "#projects-page");
        }
        console.log("Clicked side button");
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
        isAnimationDone = true;
    }
    $("#home-page").on("animationend", removeAnimations);
    $("#about-page").on("animationend", removeAnimations);
    $("#projects-page").on("animationend", removeAnimations);
    $(".side-btn").on("animationend", removeAnimations);


    /** 
     * Navigation Buttons
     */
    // open and collapse navigation menu
    function toggleNav(){
        var pageName = $(this).parents(".page").attr("id");
        $(this).parent().find(".nav-btns").toggleClass("dropped");
        $(this).parent().find(".nav-btns").toggleClass("collapsed");
        if(pageName == 'about-page'){
            $(this).parent().find(".nav-btns").find("#about").addClass("page-open");
            $(this).parent().find(".nav-btns").find("#projects").removeClass("page-open");
        } else if(pageName == "projects-page"){
            $(this).parent().find(".nav-btns").find("#projects").addClass("page-open");
            $(this).parent().find(".nav-btns").find("#about").removeClass("page-open");
        }
        $(this).trigger("mouseleave");
        console.log("Icon hover out");
    }
    $(".nav-hamburger").on("click", toggleNav);

    // click navigation buttons
    $(".nav-btns a").on("click", function(){
        var linkName = $(this).attr("id");
        const $btn = $(this).parents("section");
        if(linkName == 'home'){
            clickBtn($btn, "#home-page");
            $(this).parents("section").find(".nav-hamburger").trigger("click");
        } else if(linkName == "about"){
            clickBtn($btn, "#about-page");
            $(this).parents("section").find(".nav-hamburger").trigger("click");
        } else if(linkName == "projects"){
            clickBtn($btn, "#projects-page");
            $(this).parents("section").find(".nav-hamburger").trigger("click");
        }
        console.log("Clicked nav buttons");
    });

    // click heading button
    $(".header .heading a").on("click", function(){
        const $btn = $(this).parents(".header").find(".nav-menu");
        clickBtn($btn, "#home-page");
    });

    // heading button animation
    $(".heading a").hover(function(){
        $(this).children("h1").toggleClass("selected");
    });

    $("a.nav-hamburger").hover(
        function(){
            // hover over
            $(this).children(".fa-circle").addClass("selected");
            $(this).children(".fa-bars").addClass("selected");
            console.log("Icon hover over");
        },
        function(){
            // hover out
            if($(this).parent().find(".nav-btns").hasClass("collapsed")){
                $(this).children(".fa-circle").removeClass("selected");
                $(this).children(".fa-bars").removeClass("selected");
            }
            console.log("Icon hover out");
        }
    );

    // $.ajax({
    //     url: "https://github.com/kaitlynnchan/website",
    //     type: "GET",
    //     success: function() {
    //         console.log("reaching");
    //         // End of function for Ajax
    //     }
    // });
});
