
// detect size of screen
function checkSize(){
    // change when screen size is less than 1000px
    if(window.matchMedia("only screen and (max-width: 1100px)").matches){
        // changed location of side buttons
        $("#home-page .content").css("flex-direction", "column");
        $("#home-page .side-nav").addClass("center");
        $("#home-page .nav-btns").addClass("center");

        $("#home-page .inner.box h1").css("font-size", "2.75rem");

        // change navigation buttons layout
        $(".top-nav .nav-menu").removeClass("horizontal");
        $(".top-nav .contact-info").addClass("hide");
    } else{
        $("#home-page .content").css("flex-direction", "row");
        $("#home-page .side-nav").removeClass("center");
        $("#home-page .nav-btns").removeClass("center");

        $("#home-page .inner.box h1").css("font-size", "3.75rem");
        
        // undo navigation buttons layout
        $(".top-nav .nav-menu").addClass("horizontal");
        $(".top-nav .contact-info").removeClass("hide");
    }

    // change when screen size is less than 750px
    if(window.matchMedia("only screen and (max-width: 750px)").matches){
        // change location of about title
        $(".title").addClass("center");

    } else{
        // remove changes
        $(".title").removeClass("center");
    }
}

checkSize();

$(window).resize(function(){
    console.log("resized");
    checkSize();
});
