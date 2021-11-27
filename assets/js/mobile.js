
// detect size of screen
function checkSize(){
    if(window.matchMedia("only screen and (max-width: 1000px)").matches){    
        // changed location of side buttons
        $("#home-page .side-btn").insertBefore($("#home-page .body .contact-info"));
        $("#home-page .side-btn").addClass("center");
    } else{
        $("#home-page").append($("#home-page .side-btn"));
        $("#home-page .side-btn").removeClass("center");
    }
}

checkSize();

$(window).resize(function(){
    console.log("resized");
    checkSize();
})