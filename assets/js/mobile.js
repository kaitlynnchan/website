
// detect whether on mobile or not
if(window.matchMedia("only screen and (max-width: 760px)").matches){
    console.log("on mobile mode");

    // changed location of side buttons to be mobile responsive
    $("#home-page .inner.top").append($("#home-page .side-btn"));
    $("#home-page .side-btn").addClass("top");
} else{
    console.log("not on mobile");
}