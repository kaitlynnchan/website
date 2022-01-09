$(document).ready(function(){
    console.log("ready");
    var isAnimationDone = false;

    // icons animation
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("Icon hover");
    });

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

    // side navigation
    $(".side-nav a").on("click", function(){
        const $sideNav = $(this).parents("section");
        var linkName = $(this).attr("id");
        if(linkName == "about"){
            // open about page
            clickBtn($sideNav, "#about-page");
        } else if(linkName == "projects"){
            // open projects page
            clickBtn($sideNav, "#projects-page");
        }
        console.log("Clicked side navigation");
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
    // open and collapse top navigation menu
    function toggleNavMenu(){
        var pageName = $(this).parents(".page").attr("id");
        $(this).parents("section").find(".nav-menu").toggleClass("expanded");
        $(this).parents("section").find(".nav-menu").toggleClass("collapsed");
        if(pageName == 'about-page'){
            $(this).parents("section").find(".nav-menu").find("#about").addClass("page-open");
            $(this).parents("section").find(".nav-menu").find("#projects").removeClass("page-open");
        } else if(pageName == "projects-page"){
            $(this).parents("section").find(".nav-menu").find("#projects").addClass("page-open");
            $(this).parents("section").find(".nav-menu").find("#about").removeClass("page-open");
        }
        console.log("Icon hover out");
    }
    $(".nav-hamburger").on("click", toggleNavMenu);

    // click navigation buttons
    $(".nav-menu a").on("click", function(){
        var linkName = $(this).attr("id");
        const $btn = $(this).parents("section");
        if(linkName == 'home'){
            clickBtn($btn, "#home-page");
            $(this).parents("section").find(".nav-hamburger")
                .trigger("click")
                .trigger("mouseleave");
        } else if(linkName == "about"){
            clickBtn($btn, "#about-page");
            $(this).parents("section").find(".nav-hamburger")
                .trigger("click")
                .trigger("mouseleave");
        } else if(linkName == "projects"){
            clickBtn($btn, "#projects-page");
            $(this).parents("section").find(".nav-hamburger")
                .trigger("click")
                .trigger("mouseleave");
        }
        console.log("Clicked nav buttons");
    });

    // click heading top navigation button
    $(".top-nav.heading a").on("click", function(){
        const $btn = $(this).parents(".header").find(".top-nav").first();
        clickBtn($btn, "#home-page");
    });

    // heading top navigation button hover animation
    $(".heading a").hover(function(){
        $(this).children("h1").toggleClass("selected");
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

    // $.ajax({
    //     url: "https://github.com/kaitlynnchan/website",
    //     type: "GET",
    //     success: function() {
    //         console.log("reaching");
    //         // End of function for Ajax
    //     }
    // });
});
