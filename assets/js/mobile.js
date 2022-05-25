
// detect size of screen
function checkSize(){
    // change when screen size is less than 1000px
    if(window.matchMedia("only screen and (max-width: 1000px)").matches){
        // changed location of side buttons
        $("#home-page .side-nav").insertBefore($("#home-page .body .contact-info"));
        $("#home-page .side-nav").addClass("center");
        $("#home-page .inner.box h1").css("font-size", "2.75rem");
        $("#home-page .body .inner.top").css("display", "none");

        // change navigation buttons layout
        $(".top-nav .nav-menu").removeClass("horizontal");
    } else{
        // $("#home-page").append($("#home-page .side-nav"));
        // $("#home-page .side-nav").removeClass("center");
        $("#home-page .inner.box h1").css("font-size", "3.75rem");
        $("#home-page .body .inner.top").css("display", "flex");
        
        // undo navigation buttons layout
        $(".top-nav .nav-menu").addClass("horizontal");
    }

    // change when screen size is less than 750px
    if(window.matchMedia("only screen and (max-width: 750px)").matches){
        // change location of about title
        $("#about-page .title").insertBefore($("#about-page .body .inner").first());
        $("#about-page .title").addClass("inner center");
        $("#about-page .inner .text").addClass("center");

    } else{
        // remove changes
        // $("#about-page .body .inner").first().append($("#about-page .title"));
        $("#about-page .title").removeClass("inner center");
        $("#about-page .inner .text").removeClass("center");
    }
}

checkSize();

$(window).resize(function(){
    console.log("resized");
    checkSize();
})