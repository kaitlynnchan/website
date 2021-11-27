
// detect size of screen
function checkSize(){
    if(window.matchMedia("only screen and (max-width: 1000px)").matches){    
        // changed location of side buttons
        $("#home-page .side-btn").insertBefore($("#home-page .body .contact-info"));
        $("#home-page .side-btn").addClass("center");
        $("#home-page .inner.box h1").css("font-size", "2.75rem")
        $("#home-page .body .inner.top").css("display", "none");
    } else{
        $("#home-page").append($("#home-page .side-btn"));
        $("#home-page .side-btn").removeClass("center");
        $("#home-page .inner.box h1").css("font-size", "3.75rem")
        $("#home-page .body .inner.top").css("display", "flex");
    }
}

checkSize();

$(window).resize(function(){
    console.log("resized");
    checkSize();
})