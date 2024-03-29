$(document).ready(function(){
    console.log("ready");
    
    // initialize animate on scroll library
    AOS.init();

    /**
     * Icons
     */
    $(".icons a").hover(function(){
        $(this).children(".fa-circle").toggleClass("selected");
        $(this).children(".icon").toggleClass("selected");
        console.log("Icon hover");
    });

    /**
     * Clicking Nav Buttons
     */
    // returns string to page identifier
    function convertToPageID(pageName){
        return "#" + pageName + "-page";
    }

    function clickNavButton(e){
        var linkName = $(this).attr("id");
        let pageName = convertToPageID(linkName);
        let dist = $(pageName).offset().top;
        e.preventDefault();
        $("html, body").stop().animate(
            {scrollTop: dist}, 800
        );
        console.log("Clicked side navigation");
        return false;
    }

    /**
     * Side Navigation
     */
    $(".side-nav a").on("click", clickNavButton);

    /**
     * Side Navigation Position Bar
     */
    $(".side-nav-bar a").on("click", clickNavButton);
    
    // show text
    $(".side-nav-bar").hover(function(){
        $(".side-nav-bar ul li a div").toggleClass("show");
        $(".side-nav-bar ul li a div").addClass("animate__fadeIn");
        
    });

    /**
     * Top Navigation Menu
     */ 
    $(".top-nav .nav-menu a").on("click", clickNavButton);

    // expand/collapse top navigation menu
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

    // hamburger hover animation
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

    // hide nav-menu when collapsed after/before transitions
    $("html, body").on("animationend", function(){
        console.log("ended")
        if($(".nav-menu").hasClass("expanded")){
            $(".nav-menu").removeClass("expanded");
            $(".nav-menu").addClass("collapsed");
        }
    });

});


/**
 * Scrolling
 */
$(window).scroll(function(){
    var winHeight = $(window).height();

    /**
     * Top Navigation Menu
     */
    var offset = (winHeight / 3) * 2;
    var $nav_bar = $('.top-nav');
    if( $(this).scrollTop() > offset ){
        $nav_bar.addClass('visible');
        $nav_bar.removeClass('fade-out');
        
        // fade out contact info in top nav when page is at bottom
        var contact_info_height = $("#projects-page .body .contact-info").height();
        if($(this).scrollTop() + $(window).height() >= $(document).height() - contact_info_height){
            $nav_bar.children(".contact-info").addClass('fade-out');
            $nav_bar.children(".contact-info").removeClass('visible');
        } else{
            $nav_bar.children(".contact-info").addClass('visible');
            $nav_bar.children(".contact-info").removeClass('fade-out');
        }
    } else{
        $nav_bar.addClass('fade-out');
        $nav_bar.removeClass('visible');
        $nav_bar.children(".contact-info").removeClass('visible');
    }

    /**
     * Side Navigation Bar
     */
    var offset = winHeight / 2;
    if( $("#projects-page").position().top - $(this).scrollTop() < offset){
        $(".side-nav-bar ul li a.projects").addClass("selected");
        $(".side-nav-bar ul li a.about").removeClass("selected");
        $(".side-nav-bar ul li a.home").removeClass("selected");
    } else if ( $("#about-page").position().top - $(this).scrollTop() < offset){
        $(".side-nav-bar ul li a.about").addClass("selected");
        $(".side-nav-bar ul li a.home").removeClass("selected");
        $(".side-nav-bar ul li a.projects").removeClass("selected");
    } else {
        $(".side-nav-bar ul li a.home").addClass("selected");
        $(".side-nav-bar ul li a.about").removeClass("selected");
        $(".side-nav-bar ul li a.projects").removeClass("selected");
    }
});