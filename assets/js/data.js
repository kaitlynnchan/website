$(document).ready(function(){

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
});