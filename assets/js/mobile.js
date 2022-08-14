/**
 * Mobile Friendly Changes
 */
// detect size of screen
function checkSize(){
    // change when screen size is less than 1000px
    if(window.matchMedia("only screen and (max-width: 1100px)").matches){
        // changed location of side buttons to below
        $("#home-page .nav-btns").addClass("center");

        // update size of title text
        $("#home-page .inner.box h1").css("font-size", "2.75rem");

        // change top navigation buttons layout
        $(".top-nav .nav-menu").removeClass("horizontal");
        $(".top-nav .contact-info").addClass("hide");
    } else{
        // changed location of side buttons to the side
        $("#home-page .nav-btns").removeClass("center");

        // update size of title text
        $("#home-page .inner.box h1").css("font-size", "3.75rem");
        
        // remove top navigation buttons layout
        $(".top-nav .nav-menu").addClass("horizontal");
        $(".top-nav .contact-info").removeClass("hide");
    }

    // change when screen size is less than 750px
    if(window.matchMedia("only screen and (max-width: 750px)").matches){
        // change size of title
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
