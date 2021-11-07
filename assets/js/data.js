$(document).ready(function(){

    // get data from data.json
    var jsonFile = "https://kaitlynnchan.github.io/website/assets/data.json"
    $.getJSON(jsonFile, function(data){
        console.log(data);
        $.each(data.projects, function(key, value){
            console.log(value.name + ", " + value.description + ", " + value.img);
            var projectItem = 
                "<div class='col-sm-6 col-xs-12'>" +
                    "<div class='img-thumbnail box'>" +
                        "<img class='img-fluid' src='" + value.img + "'>" +
                        "<div class='caption'>" +
                            "<h2>" + value.name + "</h2>" +
                            "<p>" + value.description + "</p>" +
                        "</div>" +
                    "</div>" +
                "</div>";
            $("#projects-page .project-items .row").append(projectItem);
        });
    });

    // add contact-info
    $(".contact-info").each(function(){
        var info = 
            '<div class="row">' +
                '<div class="icons fa-lg col-sm-6 col-xs-12">' +
                    '<a class="fa-stack" href="">' +
                        '<i class="fa fa-circle fa-stack-2x"></i>' +
                        '<i class="fab fa-github fa-stack-1x icon"></i>' +
                    '</a>' +
                    '<a class="fa-stack" href="">' +
                        '<i class="fa fa-circle fa-stack-2x"></i>' +
                        '<i class="fab fa-linkedin-in fa-stack-1x icon"></i>' +
                    '</a>' +
                    '<a class="fa-stack" href="">' +
                        '<i class="fa fa-circle fa-stack-2x"></i>' +
                        '<i class="far fa-file fa-stack-1x icon"></i>' +
                    '</a>' +
                '</div>' +
                '<div class="col-sm-6 col-xs-12">' +
                    '<p>aaaaaaaaaaaaa@aaa.ca</p>' +
                    '<p>(000) 000-0000</p>' +
                '</div>' +
            '</div>';
        $(this).append(info);
    });
});