$(document).ready(function(){
    console.log("ready");
    var isAnimationDone = false;

    // icons animation
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("Icon hover");
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
        else{
            console.log("No animations removed");
        }
        isAnimationDone = true;
    }
    $("#home-page").on("animationend", removeAnimations);
    $("#about-page").on("animationend", removeAnimations);
    $("#projects-page").on("animationend", removeAnimations);
    $(".side-nav").on("animationend", removeAnimations);


    /** 
     * Navigation Buttons
     */
    // clicking page buttons animation
    function clickBtn(btnContainer, pageName){
        if(isAnimationDone){
            $("body").css("overflow", "hidden");
            if(btnContainer.hasClass("pull-left")){
                // moving right
                btnContainer.parents(".page").addClass("animate__animated animate__slideOutRight");
                $(pageName).css("display", "flex");
                $(pageName).addClass("animate__animated animate__slideInLeft");
            } else if(btnContainer.hasClass("pull-right")){
                // moving left
                btnContainer.parents(".page").addClass("animate__animated animate__slideOutLeft");
                $(pageName).css("display", "flex");
                $(pageName).addClass("animate__animated animate__slideInRight");
            }
            isAnimationDone = false;
        }
    }

    // returns string to page identifier
    function convertToPageID(pageName){
        return "#" + pageName + "-page";
    }

    // side navigation
    $(".side-nav a").on("click", function(){
        const $sideNav = $(this).parents("section");
        var linkName = $(this).attr("id");
        clickBtn($sideNav, convertToPageID(linkName));
        console.log("Clicked side navigation");
    });

    // top navigation menu
    $(".top-nav .nav-menu a").on("click", function(){
        const $btn = $(this).parents("section");
        var linkName = $(this).attr("id");        
        clickBtn($btn, convertToPageID(linkName));

        // trigger event handler for navigation hamburger
        $(this).parents("section").find(".nav-hamburger")
            .trigger("click")
            .trigger("mouseleave");
        console.log("Clicked top nav menu");
    });

    // open and close top navigation menu
    $(".nav-hamburger").on("click", function(){
        var pageName = $(this).parents(".page").attr("id");
        $(this).parents("section").find(".nav-menu").toggleClass("expanded");
        $(this).parents("section").find(".nav-menu").toggleClass("collapsed");

        // make link to current page unclickable
        $(this).parents("section").find(".nav-menu ul li a").each(function(){
            var iD = $(this).attr("id");
            if(pageName.includes(iD)){
                console.log(true);
                $(this).addClass("unclickable");
            }
        });
        console.log("Icon hover out");
    });

    // navigation hamburger hover animation
    $("a.nav-hamburger").hover(
        function(){
            // hover over
            $(this).children(".fa-circle").addClass("selected");
            $(this).children(".fa-bars").addClass("selected");
            console.log("Hamburger hover over");
        },
        function(){
            // hover out
            if($(this).parents("section").find(".nav-menu").hasClass("collapsed")){
                $(this).children(".fa-circle").removeClass("selected");
                $(this).children(".fa-bars").removeClass("selected");
            }
            console.log("Hamburger hover out");
        }
    );

    // top navigation heading
    $(".heading a").on("click", function(){
        const $topNavBtn = $(this).parents(".header").find(".top-nav");
        clickBtn($topNavBtn, convertToPageID("home"));
    });

    // top navigation heading hover animation
    $(".heading a").hover(function(){
        $(this).children("h1").toggleClass("selected");
    });

});
