$(document).ready(function() {
    var title = document.getElementById("title");
    var Month = document.getElementById("month");
    var name = document.getElementById("name");
    var pic = document.getElementById("pic");
    var text = document.getElementById("text");
    var request = new XMLHttpRequest();
	  var btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", function() {  
    request.open('GET', 'https://leecaesar.github.io/itis3135/Activity14/json_files/chua.json');
    request.onload = function() {
        var data = JSON.parse(request.responseText);
        updateHTML(data);
      };
      request.send();
    });
    function updateHTML(a) {
      var string = "";
      string += '<h1 id="title">' + a.title + '</h1>';
      title.innerText = a[0].title;
     /* string = '<h2 id="month">' + a.month + '</h2>';
      Month.innerText = string;
      string = '<h3 id="name">' + a.speaker + '</h3>';
      name.innerText = a.speaker;
      string  = '<img id="pic" src=">' + a.image + '" alt = "toobin_picture">'
      pic.innerText = string;
      string = '<p id="text">' + a.text + '</p>'
      text.innerText = string; */
    }
}); // end ready