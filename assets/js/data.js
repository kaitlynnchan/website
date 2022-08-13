$(document).ready(function(){

    // get data from data.json
    var jsonFile = "https://kaitlynnchan.github.io/website/assets/data.json"
    $.getJSON(jsonFile, function(data){
        console.log(data);
        $.each(data.projects, function(key, value){
            console.log(value.name + ", " + value.description + ", " + value.img);
            if(value.link){
                console.log(value.link);
                if(value.link.includes("github")){
                    var linkIcon = "fab fa-github";
                } else{
                    linkIcon = "fas fa-link";
                }
                console.log(linkIcon);
                var linkItem = 
                    '<div class="link">' +
                        '<a class="hvr-icon-grow" href="' + value.link + '" target="_blank">' +
                            '<div class="corner-triangle"></div>' +
                            '<i class="' + linkIcon + ' fa-2x icon hvr-icon"></i>' +
                        '</a>' +
                    '</div>';
                // $("#projects-page .projects-items .img-thumbnail").append(linkItem);
            } else{
                linkItem = "";
            }

            var projectItem = 
                "<div class='col-xxl-4 col-md-6 col-sm-12 col-xs-12' data-aos='zoom-in-up' data-aos-duration='1000'>" +
                    "<div class='img-thumbnail box'>" +
                        "<img class='img-fluid' src='" + value.img + "'>" +
                        "<div class='caption'>" +
                            "<h2>" + value.name + "</h2>" +
                            "<p>" + value.description + "</p>" +
                        "</div>" +
                        linkItem +
                    "</div>" +
                "</div>";
            $("#projects-page .project-items .row").append(projectItem);
        });
    });

    // add contact-info
    $(".contact-info").each(function(){
        var info = 
            '<div class="row">' +
                '<div class="icons fa-md">' +
                    '<a class="fa-stack hvr-icon-fade" href="https://github.com/kaitlynnchan" target="_blank">' +
                        '<i class="fa fa-circle fa-stack-2x hvr-icon"></i>' +
                        '<i class="fab fa-github fa-stack-1x hvr-icon icon"></i>' +
                    '</a>' +
                    '<a class="fa-stack hvr-icon-fade" href="https://www.linkedin.com/in/kaitlynn-chan-3b2935162/" target="_blank">' +
                        '<i class="fa fa-circle fa-stack-2x hvr-icon"></i>' +
                        '<i class="fab fa-linkedin-in fa-stack-1x hvr-icon icon"></i>' +
                    '</a>' +
                    '<a class="fa-stack hvr-icon-fade" href="https://drive.google.com/file/d/17RjmRSGnLhdQHUXH6xpLUb0Wcsnh-Ek7/view?usp=sharing" target="_blank">' +
                        '<i class="fa fa-circle fa-stack-2x hvr-icon"></i>' +
                        '<i class="far fa-file fa-stack-1x hvr-icon icon"></i>' +
                    '</a>' +
                '</div>' +
                // '<div class="col-sm-6 col-xs-12">' +
                //     '<p>kaitlynn_chan@sfu.ca</p>' +
                //     '<p>(604) 000-0000</p>' +
                // '</div>' +
            '</div>';
        $(this).append(info);
    });
});