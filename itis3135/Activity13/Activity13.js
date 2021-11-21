$(document).ready(function() {
    var t = document.getElementById("team");
    var request = new XMLHttpRequest;
    request.open('GET', 'https://leecaesar.github.io/itis3135/Activity13/team.json');
    request.onload = function() {
        var data = JSON.parse(request.responseText);
        t.insertAdjacentHTML('beforeend', 
        '<h3>' + data.name + '</h3>');
        //updateHTML(data);
      };
      request.send();
      function updateHTML(a) {
          var string = "";
          for(i=0;i<a.length;i++) {
              string += '<h3>' + Hey/*a[i].name*/ + '</h3>' + '<br />' + 
              '<p>' + hello + '</p>' + '<br />' +
              '<p>' + me + '</p>' + '<br />';
          }
          t.insertAdjacentHTML('beforeend', string);
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
 /*   var url = 
    "https://leecaesar.github.io/itis3135/Activity13/team.json";
    $.getJSON(url, function(data) {
        var htm = "";
        $.each(data.items, function(i, item)  {
            htm += "<h2>" + item.title + "<h2>";
            htm += "<img src=" + item.media.m + ">";
            htm += "<p></p>";
        });
        $("#photos").html(htm);
    }); */
});