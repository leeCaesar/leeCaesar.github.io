$(document).ready(function() {
    var request = new XMLHttpRequest;
    request.open('GET', 'https://leecaesar.github.io/itis3135/Activity13/team.json')
    request.onload = function() {
        var data = JSON.parse(request.responseText);
        
    }
   /* $.ajax({
        type: "get",
        url: "team.xml",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "xml",
        success: function(data) {
            $("#team").html("");
            $(data).find("management").children().each(function() {
                var xmlDoc = $(this);
                $("#team").append
                ("<h3>" + xmlDoc.find("name").text() + "</h3>" +
                          xmlDoc.find("title").text() + "<br>" +
                          xmlDoc.find("bio").text() + "<br>");
            });
        }
    }); */
    var url = 
    "https://leecaesar.github.io/itis3135/Activity13/team.json";
    $.getJSON(url, function(data) {
        var htm = "";
        $.each(data.items, function(i, item)  {
            htm += "<h2>" + item.title + "<h2>";
            htm += "<img src=" + item.media.m + ">";
            htm += "<p></p>";
        });
        $("#photos").html(htm);
    });
});