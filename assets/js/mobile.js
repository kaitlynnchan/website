
// detect size of screen
function checkSize(){
    if(window.matchMedia("only screen and (max-width: 1000px)").matches){
        // screen size is less than 1000px
        // changed location of side buttons
        $("#home-page .side-btn").insertBefore($("#home-page .body .contact-info"));
        $("#home-page .side-btn").addClass("center");
        $("#home-page .inner.box h1").css("font-size", "2.75rem")
        $("#home-page .body .inner.top").css("display", "none");

        // change navigation buttons location
        $(".nav-menu .nav-btns").removeClass("horizontal");
    } else{
        $("#home-page").append($("#home-page .side-btn"));
        $("#home-page .side-btn").removeClass("center");
        $("#home-page .inner.box h1").css("font-size", "3.75rem")
        $("#home-page .body .inner.top").css("display", "flex");
        
        // change navigation buttons location
        $(".nav-menu .nav-btns").addClass("horizontal");
    }
}

checkSize();

$(window).resize(function(){
    console.log("resized");
    checkSize();
})