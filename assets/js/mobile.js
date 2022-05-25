
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
});

$(document).ready(function(){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = ($( window ).height() / 3) * 2,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$nav_bar = $('.top-nav');
	$(window).scroll(function(){
		if( $(this).scrollTop() > offset ){
            $nav_bar.addClass('visible');
            $nav_bar.removeClass('fade-out');
            // $nav_bar.removeClass('cd-is-visible cd-fade-out');
        } else{
            $nav_bar.addClass('fade-out');
            $nav_bar.removeClass('visible');
        }
        if($(this).scrollTop() + $(window).height() == $(document).height()){
            console.log("bottom");
            $("#projects-page .body").append($(".top-nav .contact-info"));
        } 
        if($(this).scrollTop() == $(document).height() - ($(window).height()/2)){
            console.log("here")
            $("#projects-page .body .contact-info").insertBefore($(".top-nav"));
        }
		// if( $(this).scrollTop() > offset_opacity ) { 
		// }
	});
});