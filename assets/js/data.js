$(document).ready(function(){

    var jsonFile = "./assets/data.json"
    $.getJSON(jsonFile, function(data){
        console.log(data);
    });
});