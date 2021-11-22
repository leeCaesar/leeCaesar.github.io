$(document).ready(function() {
    var title = document.getElementById("title");
    var Month = document.getElementById("month");
    var name = document.getElementById("name");
    var pic = document.getElementById("pic");
    var text = document.getElementById("text");
    var url1 = 'https://leecaesar.github.io/itis3135/Activity14/json_files/toobin.json';
    var url2 = 'https://leecaesar.github.io/itis3135/Activity14/json_files/sorkin.json';
    var url3 = 'https://leecaesar.github.io/itis3135/Activity14/json_files/chua.json';
    var url4 = 'https://leecaesar.github.io/itis3135/Activity14/json_files/sampson.json';
    var btn1 = document.getElementById("btn1").
    addEventListener("click", function() {
      $.getJSON(url1, function(data) {
        var htm3 = "";
        $.each(data.items, function(i, item) {
          htm1 += '<h1 id="title">' + item.title + '</h1>';
          htm1 += '<h2 id="month">' + item.month + '</h2>';
          htm1 += '<h3 id="name">' + item.speaker + '</h3>';
          htm1 += '<img id="pic" src=">' + item.image + '" alt = "chua_picture">'
        });
        $("team").html(htm1);
      });
    });
    var btn3 = document.getElementById("btn2").
    addEventListener("click", function() {
      $.getJSON(url2, function(data) {
        var htm2 = "";
        $.each(data.items, function(i, item) {
          htm2 += '<h1 id="title">' + item.title + '</h1>';
          htm2 += '<h2 id="month">' + item.month + '</h2>';
          htm2 += '<h3 id="name">' + item.speaker + '</h3>';
          htm2 += '<img id="pic" src=">' + item.image + '" alt = "chua_picture">'
        });
        $("team").html(htm2);
      });
    });
    var btn3 = document.getElementById("btn3").
    addEventListener("click", function() {
      $.getJSON(url3, function(data) {
        var htm3 = "";
        $.each(data.items, function(i, item) {
          htm3 += '<h1 id="title">' + item.title + '</h1>';
          htm3 += '<h2 id="month">' + item.month + '</h2>';
          htm3 += '<h3 id="name">' + item.speaker + '</h3>';
          htm3 += '<img id="pic" src=">' + item.image + '" alt = "chua_picture">'
        });
        $("team").html(htm3);
      });
    });
    var btn4 = document.getElementById("btn4").
    addEventListener("click", function() {
      $.getJSON(url4, function(data) {
        var htm4 = "";
        $.each(data.items, function(i, item) {
          htm4 += '<h1 id="title">' + item.title + '</h1>';
          htm4 += '<h2 id="month">' + item.month + '</h2>';
          htm4 += '<h3 id="name">' + item.speaker + '</h3>';
          htm4 += '<img id="pic" src=">' + item.image + '" alt = "chua_picture">'
        });
        $("team").html(htm);
      });
    });
/*    var request = new XMLHttpRequest();
	  var btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", function() {  
    request.open('GET', 'https://leecaesar.github.io/itis3135/Activity14/json_files/chua.json');
    request.onload = function() {
        var data = JSON.parse(request.responseText);
        updateHTML(data);
      };
      request.send();
    }); */
  /*  function updateHTML(a) {
      var string = "";
      string += '<h1 id="title">' + a.title + '</h1>';
      title.innerText = a[0].title;
      string = '<h2 id="month">' + a.month + '</h2>';
      Month.innerText = string;
      string = '<h3 id="name">' + a.speaker + '</h3>';
      name.innerText = a.speaker;
      string  = '<img id="pic" src=">' + a.image + '" alt = "toobin_picture">'
      pic.innerText = string;
      string = '<p id="text">' + a.text + '</p>'
      text.innerText = string;
    } */
}); // end ready